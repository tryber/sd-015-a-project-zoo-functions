const data = require('../data/zoo_data');

const { species } = data;

function makeAnimalMap(sort, sex) {
  const obj = {};
  species.forEach((e) => {
    const speciesInLocation = species.filter((animal) => animal.location === e.location);
    const newObj = speciesInLocation.map((animal) => {
      let { residents } = animal;
      if (sex) residents = residents.filter((i) => i.sex === sex);
      residents = residents.map((item) => item.name);
      if (sort) residents = residents.sort();
      return { [animal.name]: residents };
    });
    obj[e.location] = newObj;
  });
  return obj;
}

function veri(includeNames, sorted, sex) {
  if (includeNames && sorted && sex) {
    return makeAnimalMap(true, sex);
  }
}

function veri2(includeNames, sex) {
  if (includeNames && sex) {
    return makeAnimalMap(false, sex);
  }
}

function veri3(includeNames, sorted) {
  if (includeNames && sorted) return makeAnimalMap(true);
  if (includeNames) return makeAnimalMap();
}

function getAnimalMap(options) {
  const obj = {};
  species.forEach((e) => {
    const speciesInLocation = species.filter((animal) => animal.location === e.location);
    obj[e.location] = speciesInLocation.map((item) => item.name);
  });
  if (!options) return obj;
  const { includeNames, sorted, sex } = options;
  if (veri(includeNames, sorted, sex)) return veri(includeNames, sorted, sex);
  if (veri2(includeNames, sex)) return veri2(includeNames, sex);
  if (veri3(includeNames, sorted)) return veri3(includeNames, sorted);
  return obj;
}

module.exports = getAnimalMap;
