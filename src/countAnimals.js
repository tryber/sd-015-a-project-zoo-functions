const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const animalList = {};
  if (!animal) {
    data.species.forEach((specie) => { animalList[specie.name] = specie.residents.length; });
    return animalList;
  }
  const { specie, sex } = animal;
  const searchAnimal = species.find((resultAnimal) => resultAnimal.name === specie);
  const numberOfAnimals = searchAnimal.residents.length;
  const searchGender = searchAnimal.residents.filter((resultAnimal) => resultAnimal.sex === sex);
  const animalsByGender = searchGender.length;
  return sex === undefined ? numberOfAnimals : animalsByGender;
}

module.exports = countAnimals;
