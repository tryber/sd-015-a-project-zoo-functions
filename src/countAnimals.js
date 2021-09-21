const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  const animals = {};
  if (!animal) {
    species.forEach(({ name, residents }) => { animals[name] = residents.length; });
    return animals;
  }
  const specieTotal = species.find((specie) => specie.name === animal.specie).residents;
  if (animal.sex) return specieTotal.filter((specie) => specie.sex === animal.sex).length;
  return specieTotal.length;
}

module.exports = countAnimals;
