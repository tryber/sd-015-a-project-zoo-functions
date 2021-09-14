const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return ids.map((id) => data.species.find((animal) => animal.id === id));
}

module.exports = getSpeciesByIds;
