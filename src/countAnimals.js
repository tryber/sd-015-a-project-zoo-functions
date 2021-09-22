const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, { name, residents }) => {
      Object.assign(acc, { [name]: residents.length });
      return acc;
    }, {});
  }
  if (!animal.gender) {
    return data.species.find((specie) => specie.name === animal.specie).residents.length;
  }
  if (animal.gender) {
    return data.species.find((specie) =>
      specie.name === animal.specie).residents.filter((resident) =>
      resident.sex === animal.gender).length;
  }
}

module.exports = countAnimals;
