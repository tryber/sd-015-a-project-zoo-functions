const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    const allAnimals = { };
    species.forEach((targetAnimal) => {
      allAnimals[targetAnimal.name] = targetAnimal.residents.length;
    });
    return allAnimals;
  }
  const { specie, sex } = animal;
  const animalSpecie = species.find((tgAnimal) => tgAnimal.name === specie).residents;
  const sexCounter = animalSpecie.reduce((acc, curr) => (curr.sex === sex ? acc + 1 : acc), 0);
  return sex === undefined ? animalSpecie.length : sexCounter;
}

module.exports = countAnimals;
