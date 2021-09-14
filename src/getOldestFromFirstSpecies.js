const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstEmployee = data.employees.find((element) => element.id === id).responsibleFor;
  const specieAnimal = firstEmployee.find((animalResponsibal) => firstEmployee[0]);
  const animalValues = data.species.find((animais) =>
    animais.id === specieAnimal);
  const animalOld = animalValues.residents.sort((a, b) => b.age - a.age);
  return Object.values(animalOld[0]);
}

module.exports = getOldestFromFirstSpecies;
