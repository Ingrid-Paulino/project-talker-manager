const express = require('express');
const bodyParser = require('body-parser');
const req1 = require('./middlewares/req1_getAllTalkers');
const req2 = require('./middlewares/req2_getTalkerById');
const routerLogin = require('./middlewares/login/loginRouter');
const routerTalke = require('./middlewares/createTalker/talkerRouter');
const routerEditTalke = require('./middlewares/editTalker/talkRouteredit');
const { validToken } = require('./middlewares/createTalker/tokenTalke');
const deleteTalker = require('./middlewares/req6_deleteTalker');
const searchTalker = require('./middlewares/req7_search');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker/search', validToken, searchTalker);
app.get('/talker', req1);
app.get('/talker/:id', req2);
app.use('/login', routerLogin);
app.use('/talker', routerTalke);
app.use('/talker/:id', routerEditTalke);
app.delete('/talker/:id', validToken, deleteTalker);

app.listen(PORT, () => {
  console.log('Rodando na porta 3000');
});