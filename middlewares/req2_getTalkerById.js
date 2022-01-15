const fs = require('fs').promises;

const OK = 200;

const req2 = async (req, res) => {
  const { id } = req.params;

  const personPorId = await fs.readFile('./talker.json', 'utf-8')
    .then((response) => JSON.parse(response));

  const personComId = personPorId.find((idPerson) => idPerson.id === +id);

  if (!personComId) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

    return res.status(OK).json(personComId);
};

module.exports = req2;

// http :3000/talker/1
// http :3000/talker/22 --> da o erro