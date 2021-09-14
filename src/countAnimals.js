const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const allSpecies = {};
    species.forEach((nameSpecies) => 
    { allSpecies[nameSpecies.name] = nameSpecies.residents.length; });
    return allSpecies;
  } if (animal.gender) {
    const animals = species.find((animalName) => animal.specie === animalName.name);
    const sex = animals.residents.filter((maleFemale) => animal.gender === maleFemale.sex);
    return sex.length;
  }
  const nameOfAnimal = species.find((elem) => animal.specie === elem.name);
  return nameOfAnimal.residents.length;
}


module.exports = countAnimals;
