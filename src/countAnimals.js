const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals({ specie = false, gender = false } = {}) {
  if (!specie && !gender) {
    const allAnimals = {};
    species.forEach((element) => { allAnimals[element.name] = element.residents.length; });
    return allAnimals;
  }
  const theAnimal = species.find((element) => element.name === specie).residents;
  if (!gender) {
    return theAnimal.length;
  }
  const animalNGender = theAnimal.filter((element) => element.sex === gender).length;
  return animalNGender;
}

module.exports = countAnimals;
