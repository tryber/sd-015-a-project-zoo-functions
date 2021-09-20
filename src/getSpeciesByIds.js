const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((animalId) => ids.includes(animalId.id));
}
module.exports = getSpeciesByIds;
