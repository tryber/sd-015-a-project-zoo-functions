const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const dataSpecies = data.species;
  if (!ids) {
    return [];
  }
  return dataSpecies.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
