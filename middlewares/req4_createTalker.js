const fs = require('fs').promises;

const createTalker = async (req, res) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;

  const talkerJson = await fs.readFile('./talker.json', 'utf-8')
    .then((response) => JSON.parse(response));

  const obj = { id: talkerJson.length + 1, name, age, talk: { watchedAt, rate } };
  
  talkerJson.push(obj);

  await fs.writeFile('./talker.json', JSON.stringify(talkerJson));

  res.status(201).json(obj);
};

module.exports = createTalker;