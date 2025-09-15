const adminGuard = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Faqat adminlar uchun ruxsat berilgan" });
  }
  next();
};

module.exports = adminGuard;
