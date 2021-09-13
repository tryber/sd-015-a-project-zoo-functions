const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((value) => ids.includes(value.id));
}

module.exports = getSpeciesByIds;
