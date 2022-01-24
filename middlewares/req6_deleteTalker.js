const fs = require('fs').promises;

async function deleteTalker(req, res) {
  // const editTalkerJson = await fs.readFile('./talker.json', 'utf-8')
  // const resultEditTalkerJson = await JSON.parse(editTalkerJson); ou
  const talkerJson = await fs.readFile('./talker.json', 'utf-8')
    .then((response) => JSON.parse(response));

  const { id } = req.params;

  const editIndex = talkerJson.findIndex((del) => del.id === +id);

  console.log(talkerJson);
  console.log(talkerJson[editIndex]);

  return res.status(204).end();
}

module.exports = deleteTalker;

// recipes.splice(recipeIndex, 1);