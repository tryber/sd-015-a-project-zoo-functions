const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals({ specie = false, sex = false } = {}) {
  if (!specie && !sex) {
    const allAnimals = {};
    species.forEach((element) => { allAnimals[element.name] = element.residents.length; });
    return allAnimals;
  }
  const theAnimal = species.find((element) => element.name === specie).residents;
  if (!sex) {
    return theAnimal.length;
  }
  const animalNSex = theAnimal.filter((element) => element.sex === sex).length;
  return animalNSex;
}

module.exports = countAnimals;
