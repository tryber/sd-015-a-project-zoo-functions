const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  const animals = {};
  if (!animal) {
    species.forEach(({ name, residents }) => { animals[name] = residents.length; });
    return animals;
  }
  const specieTotal = species.find((specie) => specie.name === animal.specie).residents;
  if (animal.gender) return specieTotal.filter((specie) => specie.sex === animal.gender).length;
  return specieTotal.length;
}

module.exports = countAnimals;
