const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  // if (ids === undefined) return [];
  return species.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
