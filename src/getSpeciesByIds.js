const zoo_data = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
