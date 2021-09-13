const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((s) => ids.includes(s.id));
}

module.exports = getSpeciesByIds;
