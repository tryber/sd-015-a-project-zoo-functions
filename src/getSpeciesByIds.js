const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // eslint-disable-next-line no-undef
  return species.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
