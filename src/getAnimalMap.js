const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const arrayLocations = ['NE', 'NW', 'SE', 'SW'];
const animalMap = arrayLocations.map((location) => species.filter((specie) => specie.location === location).map((obj) => obj.name));

function getAnimalMap(options) {
  if (options === undefined) {
    const objAnimalMap = animalMap.map((animal, index) => {
      const obj = {};
      obj[arrayLocations[index]] = animal;
      return obj;
    });
    const animalReduced = objAnimalMap.reduce((acc, obj) => Object.assign(acc, obj), {});
    return animalReduced;
  }
  
  const residentMap = animalMap.map((animal) => animal.map((spc) => {
    const specieResidents = species.find((specie) => specie.name === spc).residents;
    if (options.sorted) {
      return specieResidents.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    return specieResidents;
  }).map((array, index) => {
    const obj = {};
    obj[animal[index]] = array.map((resident) => resident.name);
    return obj;
}));
  
  const objtResidentMap = residentMap.map((animal, index) => {
    const obj = {};
    obj[arrayLocations[index]] = animal;
      return obj;
  });
  const residentReduced = objtResidentMap.reduce((acc, obj) => Object.assign(acc, obj), {});
  return residentReduced;
}


module.exports = getAnimalMap;
