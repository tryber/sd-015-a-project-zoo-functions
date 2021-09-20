const { species } = require('../data/zoo_data');

function everyAnimal() {
  const animals = {};
  species.forEach((specie) => {
    animals[specie.name] = specie.residents.length;
  });
  return animals;
}

function animalSpecies(animal) {
  let speciesTotal = 0;
  species.forEach((specie) => {
    if (specie.name === animal.specie) {
      speciesTotal = specie.residents.length;
    }
  });
  return speciesTotal;
}

function animalGender(animal) {
  let animalsGenders = 0;
  species.forEach((specie) => {
    if (specie.name === animal.specie) {
      animalsGenders = specie.residents.filter((each) => each.sex === animal.sex).length;
    }
  });
  return animalsGenders;
}

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    return everyAnimal();
  }
  if (typeof animal.sex === 'undefined') {
    return animalSpecies(animal);
  }
  return animalGender(animal);
}

module.exports = countAnimals;
