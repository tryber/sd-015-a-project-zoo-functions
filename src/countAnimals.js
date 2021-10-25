const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const obj = {};
    species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }
  const countAnimal = species.find((specie) => specie.name === animal.specie);
  let animalCount = countAnimal.residents.length;
  if (animal.gender) {
    animalCount = 0;
    countAnimal.residents.forEach((resident) => {
      if (animal.gender === resident.sex) animalCount += 1;
    });
  }
  return animalCount;
}

module.exports = countAnimals;
