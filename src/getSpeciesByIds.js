const data = require('../data/zoo_data');

function getSpeciesByIds(...rest) {
  return data.species.filter((especie) => rest.includes(especie.id));
}

module.exports = getSpeciesByIds;
