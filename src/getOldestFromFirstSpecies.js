const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getEmployee = data.employees.find((employee) => employee.id === id);
  const getFirstAnimal = getEmployee.responsibleFor[0];
  const specieResponsible = data.species.find((animals) => animals.id === getFirstAnimal).residents;
  console.log(specieResponsible);
  const oldest = specieResponsible.reduce((old, animal) => (old.age > animal.age ? old : animal));
  console.log(oldest);
  return Object.values(oldest);
}

module.exports = getOldestFromFirstSpecies;
