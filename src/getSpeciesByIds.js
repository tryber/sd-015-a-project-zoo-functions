const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((animalId) => ids.includes(animalId.id));
}

module.exports = getSpeciesByIds;
