const data = require('../data/zoo_data');

function getLocation(acc, animal) {
  if (animal.location === acc[0]) acc.push(animal.name);
  return acc;
}

const getSpeciesLocations = (speciesList) => ({
  NE: speciesList.reduce(getLocation, ['NE']).filter((__elem, index) => index !== 0),
  NW: speciesList.reduce(getLocation, ['NW']).filter((__elem, index) => index !== 0),
  SE: speciesList.reduce(getLocation, ['SE']).filter((__elem, index) => index !== 0),
  SW: speciesList.reduce(getLocation, ['SW']).filter((__elem, index) => index !== 0),
});

const getName = (list, resident) => list.concat(resident.name);

const includeResidents = (listMap, listSpecies) => ({
  NE: listMap.NE.map((animal) => ({
    [animal]: listSpecies.find((specie) => specie.name === animal).residents.reduce(getName, []),
  })),
  NW: listMap.NW.map((animal) => ({
    [animal]: listSpecies.find((specie) => specie.name === animal).residents.reduce(getName, []),
  })),
  SE: listMap.SE.map((animal) => ({
    [animal]: listSpecies.find((specie) => specie.name === animal).residents.reduce(getName, []),
  })),
  SW: listMap.SW.map((animal) => ({
    [animal]: listSpecies.find((specie) => specie.name === animal).residents.reduce(getName, []),
  })),
});

const sortNames = (obj) => ({
  [Object.keys(obj)]: Object.values(obj)[0].sort(),
});

const sortAnimals = (mapList) => ({
  NE: mapList.NE.map((animals) => sortNames(animals)),
  NW: mapList.NW.map((animals) => sortNames(animals)),
  SE: mapList.SE.map((animals) => sortNames(animals)),
  SW: mapList.SW.map((animals) => sortNames(animals)),
});

const isSex = (specie, name, sex) => {
  const { species } = data;
  const animalSpecie = species.find((animal) => animal.name === specie);
  const animalObj = animalSpecie.residents.find((animal) => animal.name === name);
  if (animalObj.sex === sex) return true;
  return false;
};

const filterSex = (obj, sex) => ({
  [Object.keys(obj)]: Object.values(obj)[0].filter((aObj) => isSex(Object.keys(obj)[0], aObj, sex)),
});

const filterBySex = (mapList, sex) => ({
  NE: mapList.NE.map((animals) => filterSex(animals, sex)),
  NW: mapList.NW.map((animals) => filterSex(animals, sex)),
  SE: mapList.SE.map((animals) => filterSex(animals, sex)),
  SW: mapList.SW.map((animals) => filterSex(animals, sex)),
});

const applyOptions = (options, mapList) => {
  let animalMap = mapList;
  if (options.sorted) animalMap = sortAnimals(animalMap);
  if (options.sex) animalMap = filterBySex(animalMap, options.sex);
  return animalMap;
};

function getAnimalMap(options) {
  // seu código aqui
  const { species } = data;
  const locationList = getSpeciesLocations(species);
  if (!options) return locationList;
  if (options.includeNames) {
    const animalMap = includeResidents(locationList, species);
    return applyOptions(options, animalMap);
  }
  return locationList;
}

module.exports = getAnimalMap;
