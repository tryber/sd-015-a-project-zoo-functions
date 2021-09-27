const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const { species } = data;

  return ids.map((id) => (species.find((speciesId) => speciesId.id === id)));
}

module.exports = getSpeciesByIds;
