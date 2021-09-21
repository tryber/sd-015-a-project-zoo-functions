const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length !== 0) {
    const searchedSpecies = [];
    ids.forEach((id) => {
      searchedSpecies.push(data.species.find((specie) => specie.id === id));
    });
    return searchedSpecies;
  }
  return [];
}

module.exports = getSpeciesByIds;
