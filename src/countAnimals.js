const data = require('../data/zoo_data');

const [...species] = data.species;

function countAnimals(animal = '') {
  let animalsCount;
  if (animal === '') {
    const allAnimals = {};
    species.forEach((specie) => { allAnimals[specie.name] = specie.residents.length; });
    animalsCount = allAnimals;
  } else if (animal.sex === undefined) {
    animalsCount = species
      .find((specie) => specie.name === animal.specie).residents.length;
  } else {
    const animalsBySpecie = species
      .find((specie) => specie.name === animal.specie);
    animalsCount = animalsBySpecie.residents
      .filter((specie) => specie.sex === animal.sex).length;
  }
  return animalsCount;
}
console.log(countAnimals());

module.exports = countAnimals;
