const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];

  if (ids === undefined) {
    return result;
  }

  const algIds = (id) => {
    const selectedSpecies = data.species.find((specie) => specie.id === id);
    result.push(selectedSpecies);
  };

  ids.forEach(algIds);
  return result;
}
module.exports = getSpeciesByIds;
