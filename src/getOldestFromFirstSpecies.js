const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = data.employees.find((worker) => worker.id === id);
  const animalId = data.species.find((specie) => specie.id === employee.responsibleFor[0]);
  let age = 0;
  let oldestAnimal;
  animalId.residents.forEach((animal) => {
    if (age < animal.age) {
      age = animal.age;
      oldestAnimal = [];
      oldestAnimal.push(animal.name);
      oldestAnimal.push(animal.sex);
      oldestAnimal.push(animal.age);
      return oldestAnimal;
    }
  });
  return oldestAnimal;
}

module.exports = getOldestFromFirstSpecies;
