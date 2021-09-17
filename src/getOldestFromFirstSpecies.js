const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const filteredEmployee = data.employees.find((employee) =>
    employee.id === id);

  const filteredSpecie = data.species.find((animals) =>
    animals.id === filteredEmployee.responsibleFor[0]);

  const ageOfOldestAnimal = filteredSpecie.residents.map((animal) =>
    animal.age).sort((a, b) => b - a)[0];

  const oldestAnimal = filteredSpecie.residents.find((animal) =>
    animal.age === ageOfOldestAnimal);

  return [oldestAnimal.name, oldestAnimal.sex, ageOfOldestAnimal];
}

module.exports = getOldestFromFirstSpecies;
