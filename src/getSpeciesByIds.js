const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
