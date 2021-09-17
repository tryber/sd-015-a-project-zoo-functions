const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const foundEmployee = data.employees.find((employee) => employee.id === id);
  const specieId = foundEmployee.responsibleFor[0];
  const foundSpecie = data.species.find((specie) => specie.id === specieId);
  const oldAnimal = foundSpecie.residents.reduce((old, resident) =>
    (old.age > resident.age ? old : resident), { name: '', sex: '', age: 0 });
  return [oldAnimal.name, oldAnimal.sex, oldAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
