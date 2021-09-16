const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((elementId) => result.push(data.species
    .find((specie) => specie.id === elementId)));
  return result;
}

module.exports = getSpeciesByIds;
