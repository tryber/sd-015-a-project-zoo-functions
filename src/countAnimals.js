const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const allSpecies = {};
    data.species.forEach((x) => {
      allSpecies[x.name] = x.residents.length;
    });
    return allSpecies;
  }
  const { specie, sex } = animal;
  if (!sex) {
    return data.species.find((x) =>
      x.name === specie).residents.length;
  }
  return data.species.find((x) =>
    x.name === specie).residents.filter((x) =>
    x.sex === sex).length;
}
module.exports = countAnimals;
