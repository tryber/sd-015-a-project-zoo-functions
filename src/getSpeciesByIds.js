const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  const selectedSpecies = data.species.filter((specie) => {
    for (let i = 0; i < ids.length; i += 1) {
      if (specie.id === ids[i]) {
        return specie;
      }
    }
  });
  return selectedSpecies;
}

module.exports = getSpeciesByIds;
