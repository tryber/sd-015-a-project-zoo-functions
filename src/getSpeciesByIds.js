const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const checkId = species
    .filter((specie) => specie.id === ids
      .find((value) => specie.id === value));
  return checkId;
}

module.exports = getSpeciesByIds;
