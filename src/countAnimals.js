const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals({ specie = false, gender = false } = {}) {
  if (!specie && !gender) {
    const allAnimals = {};
    species.forEach((element) => { allAnimals[element.name] = element.residents.length; });
    return allAnimals;
  }
  const theAnimal = species.find((element) => element.name === specie);
  if (!gender) {
    return theAnimal.residents.length;
  }
  const animalNGender = theAnimal.residents.filter((element) => element.sex === gender).length;
  return animalNGender;
}

// countAnimals({ specie: 'lions', gender: 'male' });

module.exports = countAnimals;
