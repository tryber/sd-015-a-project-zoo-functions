const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }

  const selectedSepecies = ids.map((id) => {
    const filteredSpecies = data.species.filter((specie) => specie.id === id);
    return filteredSpecies;
  });

  const finalResult = selectedSepecies.map((specie) => specie[0]);
  return finalResult;
}

module.exports = getSpeciesByIds;
