const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length == 0) return ids;
  return data.species.filter((animalId) => ids.find((primeiro) => animalId.id === primeiro))
}

module.exports = getSpeciesByIds;
