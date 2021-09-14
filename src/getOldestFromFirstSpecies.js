const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstEmployee = data.employees.find((element) => element.id === id).responsibleFor;
  const specieAnimal = firstEmployee.find((animalResponsibal) => firstEmployee[0]);
  const animalValues = data.species.find((animais) =>
  animais.id === specieAnimal);
  const animalOld = animalValues.residents.sort((a, b) => b.age - a.age);
  return Object.values(animalOld[0]);
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'))
module.exports = getOldestFromFirstSpecies;
