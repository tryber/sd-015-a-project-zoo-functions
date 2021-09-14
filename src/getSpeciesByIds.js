const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids) {
    return data.species.filter((especie) => ids.includes(especie.id));
  }
  return [];
}

module.exports = getSpeciesByIds;
