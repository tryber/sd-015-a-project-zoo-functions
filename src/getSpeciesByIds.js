const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return ids;
  return data.species.filter((animal) => ids.find((primeiro) => animal.id === primeiro));
}

module.exports = getSpeciesByIds;
