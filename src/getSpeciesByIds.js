const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter(({ id }) => ids.includes(id));
}

module.exports = getSpeciesByIds;
