const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function animalsLocation() {
  const objec = {};
  species.forEach((element) => {
    const sameLocation = species.filter((specie) => element.location === specie.location);
    objec[element.location] = sameLocation.map((value) => value.name);
  });
  return objec;
}

function getAnimalMap(options) {
  if (!options) {
    return animalsLocation();
  }
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
