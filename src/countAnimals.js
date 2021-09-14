const data = require('../data/zoo_data');

function getEveryAnimal() {
  const result = {};
  data.species.forEach((specie) => {
    result[specie.name] = specie.residents.length;
  });
  return result;
}

function countSpecie(animal) {
  let result = 0;
  data.species.forEach((specie) => {
    if (specie.name === animal.specie) {
      result = specie.residents.length;
    }
  });
  return result;
}

function countGender(animal) {
  let result = {};
  data.species.forEach((specie) => {
    if (specie.name === animal.specie) {
      const filtered = specie.residents.filter((individual) => individual.sex === animal.sex);
      result = filtered.length;
    }
  });
  return result;
}

function countAnimals(animal) {
  // seu código aqui
  if (typeof animal === 'undefined') {
    return getEveryAnimal();
  }
  if (typeof animal.sex === 'undefined') {
    return countSpecie(animal);
  }
  return countGender(animal);
}

module.exports = countAnimals;

console.log(countAnimals({ specie: 'penguins', gender: 'female' }));
