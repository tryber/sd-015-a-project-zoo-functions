const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui  
  return data.species.filter((element) => ids.includes(element.id));
}

module.exports = getSpeciesByIds;
