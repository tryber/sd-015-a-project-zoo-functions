const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((animalId) => {
    result.push(data.species.find((specie) => specie.id === animalId));
  });
  return result;
}

module.exports = getSpeciesByIds;
