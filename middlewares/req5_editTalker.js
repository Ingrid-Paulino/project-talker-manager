const fs = require('fs').promises;

async function editTalker(req, res) {
  // const editTalkerJson = await fs.readFile('./talker.json', 'utf-8')
  // const resultEditTalkerJson = await JSON.parse(editTalkerJson); ou
  const editTalkerJson = await fs.readFile('./talker.json', 'utf-8')
    .then((response) => JSON.parse(response));

  const { id } = req.params;
  const { name, age, talk } = req.body;
  // const { watchedAt, rate } = talk;

  const editIndex = editTalkerJson.findIndex((edit) => edit.id === +id);
  console.log(editTalkerJson);

  // fs.writeFil
  editTalkerJson[editIndex] = { id: Number(id), name, age, talk };
  console.log(editTalkerJson[editIndex]);
  await fs.writeFile('./talker.json', JSON.stringify(editTalkerJson));

  return res.status(200).json(editTalkerJson[editIndex]);
}

module.exports = editTalker;