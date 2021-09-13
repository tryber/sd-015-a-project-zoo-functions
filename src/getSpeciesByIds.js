const data = require('../data/zoo_data');

// Function to read the array 'ids', find each id in the list of species and return the object referred to that
function getSpeciesByIds(...ids) {
  return ids.map((animalId) => data.species.find((specie) => specie.id === animalId));
}

module.exports = getSpeciesByIds;
