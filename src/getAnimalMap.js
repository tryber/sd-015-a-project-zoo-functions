const data = require('../data/zoo_data');

const { species } = data;

function createArrayLocations() {
  const mapLocation = species.map((loc) => loc.location);
  return mapLocation.filter((loc, i) => mapLocation.indexOf(loc) === i);
}

function animalsLocations(arrayLocations) {
  const result = {};
  arrayLocations.forEach((loc) => {
    result[loc] = species.filter((ani) => ani.location === loc).map((mapName) => mapName.name);
  });
  return result;
}

// console.log(animalsLocations(createArrayLocations()));

function animalsIncludeNames(arrayLocations) {
  const result = {};
  arrayLocations.forEach((loc) => {
    result[loc] = species.filter((ani) => loc === ani.location).map((mapName) => {
      const objResidents = {};
      objResidents[mapName.name] = mapName.residents.map((res) => res.name);
      return objResidents;
    });
  });
  return result;
}

// console.log(animalsIncludeNames(createArrayLocations()));

function animalsIncludeNamesSex(arrayLocations, sex) {
  const result = {};
  arrayLocations.forEach((loc) => {
    result[loc] = species.filter((spc) => loc === spc.location).map((mapName) => {
      const objResidents = {};
      objResidents[mapName.name] = mapName.residents.filter((res) => res.sex === sex)
        .map((res) => res.name);
      return objResidents;
    });
  });
  return result;
}

// console.log(animalsIncludeNamesSex(createArrayLocations()));

function getAnimalMap({ includeNames, sex, sorted } = 0) { // o importante é definir um valor para evitar o erro undefined
  const arrayLocations = createArrayLocations();
  if (!includeNames) return animalsLocations(arrayLocations);
  let result = animalsIncludeNames(arrayLocations);
  if (sex) {
    result = animalsIncludeNamesSex(arrayLocations, sex);
  }
  if (sorted) {
    arrayLocations.forEach((loc) => {
      result[loc].forEach((elm) => {
        const firstKey = Object.keys(elm)[0];
        elm[firstKey].sort();
      });
    });
  }
  return result;
}

// console.log(getAnimalMap({ includeNames: true, sex: 'female' }));

module.exports = getAnimalMap;
