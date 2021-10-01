const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  return species.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
