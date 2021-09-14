// const { SearchSource } = require('jest');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const animalList = {};
  if (!animal) {
    data.species.forEach((specie) => { animalList[specie.name] = specie.residents.length; });
    return animalList;
  }
  const { specie, gender } = animal;
  const searchAnimal = data.species.find((resultAnimal) => resultAnimal.name === specie);
  const numberOfAnimals = searchAnimal.residents.length;
  const searchGender = searchAnimal.residents.filter((resultAnimal) => resultAnimal.sex === gender);
  const animalsByGender = searchGender.length;
  return gender === undefined ? numberOfAnimals : animalsByGender;
}

module.exports = countAnimals;
