const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// Retirado do repositório: https://github.com/tryber/sd-015-a-project-zoo-functions/blob/lucaslol-zoo-functions-project/src/countAnimals.js
function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const speciesList = {};
    species.forEach((bichos) => {
      speciesList[bichos.name] = bichos.residents.length;
    });
    return speciesList;
  }
  const { specie, sex } = animal;
  if (sex === undefined) {
    const animalSpecies = species.find((bicho) => bicho.name === specie).residents.length;
    return animalSpecies;
  }
  const animalSex = species.find((bicho) => bicho.name === specie).residents
    .filter((sexoDoBicho) => sexoDoBicho.sex === sex).length;
  return animalSex;
}

module.exports = countAnimals;
