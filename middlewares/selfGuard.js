const selfGuard = (req, res, next) => {
  const { id } = req.params;   
  const userId = req.user.id; 

  if (parseInt(id, 10) !== userId) {
    return res.status(403).json({ message: "Siz faqat o'z ma'lumotlaringizga ruxsatga egasiz" });
  }

  next();
};

module.exports = selfGuard;
