const email1 = (req, res, next) => {
  const { email } = req.body;
  if (!email || email.length === 0) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }

  next();
};

const email2 = (req, res, next) => {
  const { email } = req.body;
  if (!email || !email.includes('@' && '.com')) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  next();
};

module.exports = { email1, email2 };