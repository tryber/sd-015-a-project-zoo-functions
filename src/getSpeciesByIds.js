const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((id) => data.species.find((spec) => spec.id === id));
}

module.exports = getSpeciesByIds;
