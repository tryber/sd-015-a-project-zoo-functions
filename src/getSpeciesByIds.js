const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const specieID = ids.map((id) => data.species.find((specie) => id === specie.id));
  if (ids.length === 0) {
    return [];
  }
  return specieID;
}

module.exports = getSpeciesByIds;
