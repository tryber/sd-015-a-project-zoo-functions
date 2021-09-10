const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const { species } = data;
  return species.filter((specie) => ids.some((id) => id === specie.id));
}

module.exports = getSpeciesByIds;
