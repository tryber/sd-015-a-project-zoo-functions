const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) { // ... nos permite representar um número indefinido de argumentos como um array
  return species.filter((specie) => ids.includes(specie.id));
}

// console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
