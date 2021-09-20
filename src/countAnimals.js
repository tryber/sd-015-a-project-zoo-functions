const { species } = require('../data/zoo_data');

const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const allAnimals = {};
    species.forEach(({ name, residents }) => {
      allAnimals[name] = residents.length;
    });
    return allAnimals;
  } if (!animal.sex) {
    const { residents } = species.find((specie) => specie.name === animal.specie);
    return residents.length;
  }
  if (animal.specie && animal.sex) {
    const findSpecie = species.find((especie) => especie.name === animal.specie).residents;
    const findGender = findSpecie.filter((sexoDoAnimal) => sexoDoAnimal.sex === animal.sex);
    return findGender.length;
  }
}

module.exports = countAnimals;
