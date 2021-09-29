const data = require('../data/zoo_data');

function countAnimals(animal) {
  const entry = 1;
  const key = {};

  if (!animal) {
    data.species.forEach((specie) => {
      key[specie.name] = specie.residents.length;
    });
    return key;
  }

  if (Object.keys(animal).length === entry) {
    return data.species.find((specie) => animal.specie === specie.name).residents.length;
  }

  return data.species.find((specie) => animal.specie === specie.name).residents
    .filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
