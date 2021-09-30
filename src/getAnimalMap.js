const data = require('../data/zoo_data');

const { species } = data;

const arrayLocations = ['NE', 'NW', 'SE', 'SW'];
const animalMap = arrayLocations.map((location) => species
  .filter((specie) => specie.location === location)
  .map((obj) => obj.name));

function getSpecieResidents(options, spc) {
  const specieResidents = species
    .find((specie) => specie.name === spc).residents;
  if (options.sex) {
    const residentsFiltered = specieResidents
      .filter((specie) => specie.sex === options.sex);
    return residentsFiltered;
  }
  return specieResidents;
}

function getSortedAnimals(animal, options) {
  const sortAnimals = animal.map((spc) => {
    if (options.sorted) {
      const sortResidents = getSpecieResidents(options, spc)
        .sort((a, b) => (a.name > b.name) ? 1 : -1);
      return sortResidents;
    }
    return getSpecieResidents(options, spc);
  });
  return sortAnimals;
}

function getResidentMap(options) {
  const residentMap = animalMap.map((animal) => getSortedAnimals(animal, options)
    .map((array, index) => {
      const obj = {};
      obj[animal[index]] = array.map((resident) => resident.name);
      if (options.includeNames) {
        return obj;
      }
      return Object.keys(obj)[0];
    }));
  return residentMap;
}

function turnIntoObject(value, index) {
  const obj = {};
  obj[arrayLocations[index]] = value;
  return obj;
}

function getAnimalMap(options) {
  if (options === undefined) {
    const objAnimalMap = animalMap
      .map((animal, index) => turnIntoObject(animal, index));
    const animalMapReduced = objAnimalMap
      .reduce((acc, obj) => Object.assign(acc, obj), {});
    return animalMapReduced;
  }

  const objtResidentMap = getResidentMap(options)
    .map((animal, index) => turnIntoObject(animal, index));
  const residentReduced = objtResidentMap
    .reduce((acc, obj) => Object.assign(acc, obj), {});
  return residentReduced;
}

module.exports = getAnimalMap;
