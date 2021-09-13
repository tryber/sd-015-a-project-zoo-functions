const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter(({ id } = data.species) => ids.includes(id));
}

// eslint-disable-next-line sonarjs/no-extra-arguments
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;

// INCOMPLETO
