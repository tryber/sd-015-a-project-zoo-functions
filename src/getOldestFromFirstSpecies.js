const data = require('../data/zoo_data');

const { species, employees } = data;

const findEmployee = (id) => employees.find((employee) => employee.id === id);

const findResponsibleFor = (employee) => {
  const { responsibleFor } = employee;
  return responsibleFor[0];
};

const findAnimalById = (animalId) => species.find((specie) => specie.id === animalId);

const getOldestAnimal = (animal) => {
  const { residents } = animal;
  const oldestAnimal = residents.reduce((acc, curr) => {
    if (acc.age > curr.age) return acc;
    return curr;
  }, 0);
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = findEmployee(id);
  const firstAnimalId = findResponsibleFor(employee);
  const animal = findAnimalById(firstAnimalId);
  return getOldestAnimal(animal);
}

module.exports = getOldestFromFirstSpecies;
