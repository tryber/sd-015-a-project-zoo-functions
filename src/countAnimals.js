const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const allSpecies = {};
    species.forEach((nameSpec) => { allSpecies[nameSpec.name] = nameSpec.residents.length; });
    return allSpecies;
  } if (animal.gender) {
    const animals = species.find((animalName) => animal.specie === animalName.name);
    const sex = animals.residents.filter((maleFemale) => animal.gender === maleFemale.sex);
    return sex.length;
  }
  const nameOfAnimal = species.find((elem) => animal.specie === elem.name);
  return nameOfAnimal.residents.length;
}

// Pull na branch master realizado.

module.exports = countAnimals;
