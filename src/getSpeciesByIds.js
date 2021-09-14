const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const dataSpecies = data.species;
  return dataSpecies.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
