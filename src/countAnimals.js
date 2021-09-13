const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const AnimalNames = data.species.map((specie) => specie.name);
console.log(species);

function countAnimalsWithoutParam() {
  const countAllAnimals = [];
  const animalsObject = {};
  for (let i = 0; i < data.species.length; i += 1) {
    countAllAnimals.push(data.species[i].residents.length);
  }
  for (let i = 0; i < data.species.length; i += 1) {
    animalsObject[AnimalNames[i]] = countAllAnimals[i];
  }
  return animalsObject;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return countAnimalsWithoutParam();
  }
  if (animal.gender === undefined) {
    const findAnimal = species.find((animals) => animals.name === animal.specie);
    const numberOfAnimals = findAnimal.residents.length;
    return numberOfAnimals;
  }
  const findAnimal = species.find((animals) => animals.name === animal.specie);
  const countGender = findAnimal.residents.filter((gender) => gender.sex === animal.gender);
  return  countGender.length;
}

module.exports = countAnimals;
