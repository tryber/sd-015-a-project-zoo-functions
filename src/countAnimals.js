const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const numOfAnimals = {};
    species.forEach((animals) => {
      numOfAnimals[animals.name] = animals.residents.length;
    });
    return numOfAnimals;
  }
  const findSpecie = species.find((specie) => specie.name === animal.specie);
  if (animal.specie && animal.sex) {
    const findSexuality = findSpecie.residents.filter((specie) => specie.sex === animal.sex);
    return findSexuality.length;
  }
  return findSpecie.residents.length;
}

module.exports = countAnimals;
