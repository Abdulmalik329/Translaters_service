const nodemailer = require("nodemailer");
const config = require("config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.get("email_user"),
    pass: config.get("email_pass"),
  },
});

async function sendVerificationEmail(to, token) {
  const link = `${config.get("api_url")}/api/auth/verify-email?token=${token}`;

  await transporter.sendMail({
    from: `Admin Panel <${config.get("email_user")}>`,
    to,
    subject: "Emailni tasdiqlang",
    html: `
      <h2>Salom!</h2>
      <p>Emailingizni tasdiqlash uchun quyidagi havolani bosing:</p>
      <a href="${link}">Emailni tasdiqlash</a>
    `,
  });
}

module.exports = sendVerificationEmail;
