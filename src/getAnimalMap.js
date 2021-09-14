const data = require('../data/zoo_data');

const { species } = data;

function getLocation(acc, animal) {
  if (animal.location === acc[0]) acc.push(animal.name);
  return acc;
}

const getAllSpeciesLocations = (speciesList) => ({
  NE: speciesList
    .reduce(getLocation, ['NE']).filter((_specie, index) => index !== 0),
  NW: speciesList
    .reduce(getLocation, ['NW']).filter((_specie, index) => index !== 0),
  SE: speciesList
    .reduce(getLocation, ['SE']).filter((_specie, index) => index !== 0),
  SW: speciesList
    .reduce(getLocation, ['SW']).filter((_specie, index) => index !== 0),
});

const getName = (list, resident) => list.concat(resident.name);

const listAllResidents = (speciesLocationsList, allSpecies) => ({
  NE: speciesLocationsList.NE.map((animal) => ({
    [animal]: allSpecies.find((specie) => specie.name === animal).residents.reduce(getName, []),
  })),
  NW: speciesLocationsList.NW.map((animal) => ({
    [animal]: allSpecies.find((specie) => specie.name === animal).residents.reduce(getName, []),
  })),
  SE: speciesLocationsList.SE.map((animal) => ({
    [animal]: allSpecies.find((specie) => specie.name === animal).residents.reduce(getName, []),
  })),
  SW: speciesLocationsList.SW.map((animal) => ({
    [animal]: allSpecies.find((specie) => specie.name === animal).residents.reduce(getName, []),
  })),
});

const sortNames = (obj) => ({
  [Object.keys(obj)]: Object.values(obj)[0].sort(),
});

const sortAnimals = (residentList) => ({
  NE: residentList.NE.map((animals) => sortNames(animals)),
  NW: residentList.NW.map((animals) => sortNames(animals)),
  SE: residentList.SE.map((animals) => sortNames(animals)),
  SW: residentList.SW.map((animals) => sortNames(animals)),
});

const verifySex = (specie, name, sex) => {
  const animalSpecie = species.find((animal) => animal.name === specie);
  const animalObj = animalSpecie.residents.find((animal) => animal.name === name);
  if (animalObj.sex === sex) return true;
  return false;
};

const filterSex = (resident, sex) => ({
  [Object.keys(resident)]: Object.values(resident)[0].filter((name) => (
    verifySex(Object.keys(resident)[0], name, sex))),
});

const filterBySex = (residentsList, sex) => ({
  NE: residentsList.NE.map((resident) => filterSex(resident, sex)),
  NW: residentsList.NW.map((resident) => filterSex(resident, sex)),
  SE: residentsList.SE.map((resident) => filterSex(resident, sex)),
  SW: residentsList.SW.map((resident) => filterSex(resident, sex)),
});

const applyOptions = (options, residentsList) => {
  let newList = residentsList;
  if (options.sorted) newList = sortAnimals(newList);
  if (options.sex) newList = filterBySex(newList, options.sex);
  return newList;
};

function getAnimalMap(options) {
  const allSpeciesLocations = getAllSpeciesLocations(species);
  if (!options) return allSpeciesLocations;
  if (options.includeNames) {
    const residentsList = listAllResidents(allSpeciesLocations, species);
    return applyOptions(options, residentsList);
  }
  return allSpeciesLocations;
}

module.exports = getAnimalMap;
