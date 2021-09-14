const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((idAnimal) => ids.includes(idAnimal.id));
}

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
