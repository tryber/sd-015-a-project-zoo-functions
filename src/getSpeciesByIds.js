const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }

  const selectedSepecies = ids.map((id) => {
    const filteredSpecies = data.species.filter((specie) => {
      return specie.id === id;
    });
    return filteredSpecies;
  });
  return selectedSepecies;
}

module.exports = getSpeciesByIds;
