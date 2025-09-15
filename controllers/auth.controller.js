const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const Admin = require("../models/admin");
const { Op } = require("sequelize");
const sendVerificationEmail = require("../helper/sendEmail");  

const jwtSecret = config.get("jwtSecret");
const jwtRefreshSecret = config.get("jwtRefreshSecret");
const accessTokenExpiry = config.get("jwtAccessExpiration");
const refreshTokenExpiry = config.get("jwtRefreshExpiration");

const generateAccessToken = (admin) => {
  return jwt.sign(
    { id: admin.id, email: admin.email, name: admin.name },
    jwtSecret,
    { expiresIn: accessTokenExpiry }
  );
};

const generateRefreshToken = (admin) => {
  return jwt.sign(
    { id: admin.id },
    jwtRefreshSecret,
    { expiresIn: refreshTokenExpiry }
  );
};

// Ro'yxatdan o'tish
const register = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;

    // Email yoki telefon allaqachon borligini tekshirish
    const candidate = await Admin.findOne({
      where: {
        [Op.or]: [{ email }, { phone }]
      }
    });
    if (candidate) {
      return res.status(400).json({ message: "Email yoki telefon allaqachon ro'yxatdan o'tgan" });
    }

    // Parolni hash qilish
    const hashedPassword = await bcrypt.hash(password, 10);

    // Admin yaratish, dastlab is_verified = false
    const admin = await Admin.create({
      name,
      phone,
      email,
      password: hashedPassword,
      is_verified: false,
      is_creater: false,
    });

    // Email tasdiqlash uchun token yaratish (faqat id)
    const token = jwt.sign({ id: admin.id }, jwtSecret, { expiresIn: "1d" }); // 1 kun amal qiladi

    // Tasdiqlash emailini yuborish
    await sendVerificationEmail(email, token);

    res.status(201).json({ message: "Admin muvaffaqiyatli ro'yxatdan o'tdi. Iltimos, emailingizni tasdiqlang." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ where: { email } });
    if (!admin) return res.status(400).json({ message: "Noto'g'ri email yoki parol" });

    if (!admin.is_verified) {
      return res.status(401).json({ message: "Email hali tasdiqlanmagan!" });
    }

    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) return res.status(400).json({ message: "Noto'g'ri email yoki parol" });

    const accessToken = generateAccessToken(admin);
    const refreshToken = generateRefreshToken(admin);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: refreshTokenExpiry * 1000,
      sameSite: "strict",
    });

    res.json({ accessToken, admin: { id: admin.id, name: admin.name, email: admin.email } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logout = (req, res) => {
  res.clearCookie("refreshToken");
  res.json({ message: "Logout muvaffaqiyatli bajarildi" });
};

const refreshToken = (req, res) => {
  try {
    const token = req.cookies.refreshToken;
    if (!token) return res.status(401).json({ message: "Refresh token topilmadi" });

    jwt.verify(token, jwtRefreshSecret, (err, decoded) => {
      if (err) return res.status(403).json({ message: "Token yaroqsiz" });

      const newAccessToken = jwt.sign(
        { id: decoded.id },
        jwtSecret,
        { expiresIn: accessTokenExpiry }
      );
      res.json({ accessToken: newAccessToken });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;

    const decoded = jwt.verify(token, jwtSecret);
    const admin = await Admin.findByPk(decoded.id);

    if (!admin) {
      return res.status(404).json({ message: "Admin topilmadi" });
    }

    admin.is_verified = true;
    await admin.save();

    res.json({ message: "Email muvaffaqiyatli tasdiqlandi" });
  } catch (error) {
    res.status(400).json({ message: "Token noto'g'ri yoki muddati tugagan" });
  }
};

module.exports = {
  register,
  login,
  logout,
  refreshToken,
  verifyEmail,
};
