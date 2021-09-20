const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const allSpecies = {};
    data.species.forEach((x) => {
      allSpecies[x.name] = x.residents.length;
    });
    return allSpecies;
  }
  const { specie, sex } = animal;
  if (sex === undefined) {
    const specieType = data.species.find((x) =>
      x.name === specie).residents.length;
    return specieType;
  }
  const specieSex = data.species.find((x) =>
    x.name === specie).residents.filter((x) =>
    x.sex === sex).length;
  return specieSex;
}
console.log(countAnimals({ specie: 'lions', sex: 'female' }));

module.exports = countAnimals;
