const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const allSpecies = {};
    data.species.forEach((specie) => { allSpecies[specie.name] = specie.residents.length; });
    return allSpecies;
  }
  if (animal.gender === undefined) {
    return data.species.find((specie) => specie.name === animal.specie).residents.length;
  }
  return data.species.find((specie) =>
    specie.name === animal.specie).residents.filter((resident) => resident.sex === animal.gender)
    .length;
}

module.exports = countAnimals;
