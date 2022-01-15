const password1 = (req, res) => {
  const { password } = req.body;

  if (!password || password.length === 0) {
    return res.status(400).json({ message: 'O \'password\' deve ter pelo menos 6 caracteres' });
  } 
};

const password2 = (req, res) => {
  const { password } = req.body;
  
  if (password.length < 6) {
    return res.status(400).json({ message: 'O \'password\' deve ter pelo menos 6 caracteres' });
  } 
};

const validPassword = (_req, _res, next) => {
  password1();
  password2();
  next();
};

module.exports = validPassword;