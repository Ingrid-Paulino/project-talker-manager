const fs = require('fs').promises;

const OK = 200;

const req1 = async (_req, res) => {
  const person = await fs.readFile('./talker.json', 'utf-8')
    .then((response) => JSON.parse(response));

    res.status(OK).json(person);
};

module.exports = req1;