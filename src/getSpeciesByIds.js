const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const arraySpecies = ids.map((id) => species.find((specie) => specie.id === id));
  return arraySpecies;
}

console.log(getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d'));

module.exports = getSpeciesByIds;
