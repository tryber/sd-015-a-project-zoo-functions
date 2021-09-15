const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((elementIds) =>
    result.push(data.species.find((elementSpecies) =>
      elementSpecies.id === elementIds)));
  return result;
}

module.exports = getSpeciesByIds;
