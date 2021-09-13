const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter(({ id }) => ids.includes(id));
}

module.exports = getSpeciesByIds;
