const data = require('../data/zoo_data');

const { species } = data;
const initialSpecies = species;

const arrayLocations = ['NE', 'NW', 'SE', 'SW'];
const animalMap = arrayLocations.map((location) => initialSpecies
  .filter((specie) => specie.location === location)
  .map((obj) => obj.name));

function getSpecieResidents(options, spc) {
  const specieResidents = initialSpecies
    .find((specie) => specie.name === spc).residents;
  if (options.sex) {
    const residentsFiltered = specieResidents
      .filter((specie) => specie.sex === options.sex);
    return residentsFiltered;
  }
  return specieResidents;
}

function getSortedAnimals(spc, options) {
  const residents = getSpecieResidents(options, spc);
  return [...residents].sort((a, b) => a.name > b.name);
}

function getResidentMap(options) {
  const residentMap = animalMap.map((animal) => animal
    .map((spc) => getSpecieResidents(options, spc)).map((array, index) => {
      const obj = {};
      obj[animal[index]] = array.map((resident) => resident.name);
      if (options.includeNames) {
        return obj;
      }
      return Object.keys(obj)[0];
    }));
  return residentMap;
}

function turnIntoObject(property, value, index) {
  const obj = {};
  obj[property[index]] = value;
  return obj;
}

function getSortedResidentMap(options) {
  const sortedResidentMap = animalMap.map((animal) => animal
    .map((spc) => getSortedAnimals(spc, options)).map((array, index) => {
      const value = array.map((resident) => resident.name);
      if (options.includeNames) {
        return turnIntoObject(animal, value, index);
      }
      return Object.keys(turnIntoObject(animal, value, index))[0];
    }));
  return sortedResidentMap;
}

function getAnimalMap(options) {
  if (options === undefined) {
    const objAnimalMap = animalMap
      .map((animal, index) => turnIntoObject(arrayLocations, animal, index));
    const animalMapReduced = objAnimalMap.reduce((acc, obj) => Object.assign(acc, obj), {});
    return animalMapReduced;
  }
  let objtResidentMap = getResidentMap(options)
    .map((animal, index) => turnIntoObject(arrayLocations, animal, index));

  if (options.sorted) {
    objtResidentMap = getSortedResidentMap(options)
      .map((animal, index) => turnIntoObject(arrayLocations, animal, index));
  }

  const residentReduced = objtResidentMap
    .reduce((acc, obj) => Object.assign(acc, obj), {});
  return residentReduced;
}

module.exports = getAnimalMap;
