const fs = require('fs').promises;

async function searchTalker(req, res) {
  const { searchName } = req.query;

  // const persons = await fs.readFile('./talker.json', 'utf-8')
  //   .then((response) => JSON.parse(response));
  // ou
  const persons = await fs.readFile('./talker.json', 'utf-8');
  const arrayPersons = JSON.parse(persons);

  if (!searchName || searchName === '') return res.status(200).json(arrayPersons);

  const filterArrayIncluiName = arrayPersons.filter((talker) =>
    talker.name.toLowerCase().includes(searchName.toLowerCase()));
  console.log(filterArrayIncluiName);

  if (!filterArrayIncluiName) return res.status(200).json([]);

  res.status(200).json(filterArrayIncluiName);
}

module.exports = searchTalker;
