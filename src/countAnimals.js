const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const result = {};
    species.forEach((specie) => {
      result[specie.name] = specie.residents.length;
    });
    return result;
  }

  if (Object.keys(animal).length === 1) {
    return species
      .find((specie) => specie.name === animal.specie).residents.length;
  }

  return species
    .find((specie) => specie.name === animal.specie).residents
    .filter((resident) => resident.sex === animal.gender).length;
}

module.exports = countAnimals;
