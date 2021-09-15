const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const objAnimals = {};
    data.species.forEach((value) => {
      objAnimals[value.name] = value.residents.length;
    });
    return objAnimals;
  }

  const findAnimal = data.species.find((value) => value.name === animal.specie);
  if (Object.keys(animal).length === 1) {
    return findAnimal.residents.length;
  }

  const genderPopularity = findAnimal.residents.filter((value) => value.sex === animal.sex);
  return genderPopularity.length;
}

module.exports = countAnimals;
