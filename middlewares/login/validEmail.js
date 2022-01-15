const email1 = (req, res) => {
  const { email } = req.body;
  if (!email || email.length === 0) {
    return res.status(400).json({ message: 'O campo \'email\' é obrigatório' });
  }
};

const email2 = (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@' && '.com')) {
    return res.status(400).json({ message: 'O \'email\' deve ter o formato \'email@email.com\'' });
  }
};

const validEmail = (_req, _res, next) => {
  email1();
  email2();
  next();
};

module.exports = validEmail;