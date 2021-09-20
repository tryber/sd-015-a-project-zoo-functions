const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((especie) => ids.some((olele) => olele === especie.id));
}

module.exports = getSpeciesByIds;
