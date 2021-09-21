const data = require('../data/zoo_data');

function getAnimalMap(options) {
  console.log(options === { sex: 'female' });
  if (options === undefined || options === { sex: 'female' }) {
    const animalMap = {
      NE: data.species
        .filter((specie) => specie.location === 'NE')
        .map((animal) => animal.name),
      NW: data.species
        .filter((specie) => specie.location === 'NW')
        .map((animal) => animal.name),
      SE: data.species
        .filter((specie) => specie.location === 'SE')
        .map((animal) => animal.name),
      SW: data.species
        .filter((specie) => specie.location === 'SW')
        .map((animal) => animal.name),
    };
    return animalMap;
  }
}

module.exports = getAnimalMap;
