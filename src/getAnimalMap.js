const data = require('../data/zoo_data');

function animalsSort(animalArray, sorted) {
  if (sorted) {
    animalArray.sort();
  }
}

function correctSex(residentSex, sex) {
  return (residentSex === sex) || (sex === undefined);
}

function includeAnimalByName(animalMap, name, location, sorted, sex) {
  animalMap[location].push(name);
  if (sex === undefined) {
    animalsSort(animalMap[location], sorted);
  }
}

function includeAnimalBySpecie(animalMap, name, location, residents, sorted, sex) {
  const animalObject = {};
  animalObject[name] = [];
  animalMap[location].push(animalObject);
  const position = animalMap[location].length - 1;
  const currentAnimal = animalMap[location][position][name];
  residents.forEach((resident) => {
    if (correctSex(resident.sex, sex)) {
      currentAnimal.push(resident.name);
    }
  });
  animalsSort(currentAnimal, sorted);
}

function getName(animal, animalMap, includeNames, sorted, sex) {
  const { name, location, residents } = animal;

  if (includeNames) {
    includeAnimalBySpecie(animalMap, name, location, residents, sorted, sex);
  } else {
    includeAnimalByName(animalMap, name, location, sorted, sex);
  }
}

function getAnimalMap({ ...options } = {}) {
  const animalMap = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  data.species.forEach((animal) => {
    getName(animal, animalMap, options.includeNames, options.sorted, options.sex);
  });
  // console.log(animalMap.NE);
  return animalMap;
}
console.log(getAnimalMap());
module.exports = getAnimalMap;
