const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((object, specie) =>
      Object.assign(object, { [specie.name]: specie.residents.length }), {});
  }
  if (animal.specie && animal.sex) {
    return data.species.find((specie) =>
      specie.name === animal.specie).residents.filter((resident) =>
      resident.sex === animal.sex).length;
  }
  if (animal.specie) {
    return data.species.find((specie) => specie.name === animal.specie).residents.length;
  }
}

module.exports = countAnimals;
