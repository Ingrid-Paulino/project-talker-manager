const express = require('express');
const bodyParser = require('body-parser');
const req1 = require('./middlewares/req1_getAllTalkers');
const req2 = require('./middlewares/req2_getTalkerById');
const router = require('./middlewares/login/loginRouter');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Rodando na porta 3000');
});

app.get('/talker', req1);
app.get('/talker/:id', req2);
app.use('/login', router);