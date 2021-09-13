const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter((param) => ids.includes(param.id));
}

module.exports = getSpeciesByIds;
