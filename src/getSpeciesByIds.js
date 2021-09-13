const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((item) => ids.includes(item.id));
}

module.exports = getSpeciesByIds;
