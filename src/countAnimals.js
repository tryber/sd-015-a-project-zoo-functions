const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const allAnimals = {};

    data.species.forEach((element) => {
      allAnimals[element.name] = element.residents.length;
    });

    return allAnimals;
  }

  if (Object.keys(animal).includes('specie') && Object.keys(animal).length === 1) {
    return data.species.find((element) =>
      element.name === animal.specie).residents.length;
  }
  return data.species.find((element) =>
    element.name === animal.specie).residents
    .filter((element) => element.sex === animal.gender).length;
}

module.exports = countAnimals;
