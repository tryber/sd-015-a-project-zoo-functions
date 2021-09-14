const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function animalsLocation() {
  const object = {};
  species.forEach((element) => {
    const sameLocation = species.filter((specie) => element.location === specie.location);
    object[element.location] = sameLocation.map((value) => value.name);
  });
  return object;
}

function getAnimalMap(options) {
  if (!options) {
    return animalsLocation();
  }
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
