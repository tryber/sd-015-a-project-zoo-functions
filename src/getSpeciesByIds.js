// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) return ids;
  return data.species.filter((animalId) => ids.find((first) => animalId.id === first));
}

module.exports = getSpeciesByIds;
