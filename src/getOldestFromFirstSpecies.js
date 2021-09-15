const data = require('../data/zoo_data');

function findEmployee(id) {
  return data.employees.find((emp) => emp.id === id);
}

function findAnimal(tgtEmp, id) {
  return tgtEmp.responsibleFor.find((empId) =>
    data.species.filter((animalId) => animalId === id));
}

function getAnimal(id) {
  return data.species.find((animal) => animal.id === id);
}

function oldestAnimal(animal) {
  return animal.residents.sort((a, b) => b.age - a.age)[0];
}

function getOldestFromFirstSpecies(id) {
  const tgtEmp = findEmployee(id);
  const animalId = findAnimal(tgtEmp, id);
  const tgtAnimal = getAnimal(animalId);
  const odAnimal = oldestAnimal(tgtAnimal);
  return [odAnimal.name, odAnimal.sex, odAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
