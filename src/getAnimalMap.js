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

function SortEsex(sex) {
  const object = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach(({ location, name, residents }) => {
    const names = residents.filter((val) => val.sex === sex);
    object[location].push({ [name]: names.map((value) => value.name).sort() });
  });
  return object;
}

function onlySort() {
  const object = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach(({ location, name, residents }) => {
    object[location].push({ [name]: residents.map((val) => val.name).sort() });
  });
  return object;
}

function onlySex(sex) {
  const object = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach(({ location, name, residents }) => {
    const names = residents.filter((val) => val.sex === sex);
    object[location].push({ [name]: names.map((value) => value.name) });
  });
  return object;
}

function onlyIncludesName() {
  const object = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach(({ location, name, residents }) => {
    object[location].push({ [name]: residents.map((val) => val.name) });
  });
  return object;
}

function getAnimals(sex, sorted) {
  if (sorted && sex) {
    return SortEsex(sex);
  }
  if (sorted) {
    return onlySort();
  }
  if (sex) {
    return onlySex(sex);
  }
  return onlyIncludesName();
}

function getAnimalMap(options) {
  if (!options) {
    return animalsLocation();
  }
  const { includeNames, sex, sorted } = options;
  if (includeNames) return getAnimals(sex, sorted);
  return animalsLocation();
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
