const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((animals) => ids.includes(animals.id));
}

module.exports = getSpeciesByIds;
