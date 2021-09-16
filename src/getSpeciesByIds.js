const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  return data.species.filter((animal) => ids.includes(animal.id));
}

module.exports = getSpeciesByIds;
