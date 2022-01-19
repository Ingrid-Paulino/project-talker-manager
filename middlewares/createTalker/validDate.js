// Fonte: https://www.guj.com.br/t/resolvido-como-validar-data-com-java-script/276656

const dateRegex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

function validDate(req, res, next) {
const { talk } = req.body;

  if (!talk.watchedAt) {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  // console.log(watchedAt);
  
  const validacao = dateRegex.test(talk.watchedAt);
  // console.log(validacao);
  if (!validacao) {
    return res.status(400).json({
        message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
}

module.exports = { validDate };
