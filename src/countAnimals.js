const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function undefinedAnimal() {
  const object = {};
  species.forEach((element) => {
    object[element.name] = element.residents.length;
  });
  return object;
}

function countSpecies(animal) {
  const object = species.find((element) => element.name === animal.specie);
  if (animal.specie !== undefined && animal.gender === undefined) {
    return object.residents.length;
  }
  return object.residents.filter((element) => element.sex === animal.gender).length;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return undefinedAnimal();
  }
  return countSpecies(animal);
}

console.log(countAnimals());

module.exports = countAnimals;
