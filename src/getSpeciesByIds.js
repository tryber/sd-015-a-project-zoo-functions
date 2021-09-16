const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const specieById = data.species.filter((specie) => ids.includes(specie.id));
  return specieById;
}

module.exports = getSpeciesByIds;
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
