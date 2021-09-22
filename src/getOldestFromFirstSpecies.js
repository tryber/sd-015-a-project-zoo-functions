const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const { species, employees } = data;
  const employeeSelected = employees.find((employee) => employee.id === id);
  const firstSpecieId = employeeSelected.responsibleFor[0];
  const specieSelected = species.find((specie) => specie.id === firstSpecieId);
  const specieResidents = specieSelected.residents;
  const oldestAnimal = specieResidents.sort((a, b) => b.age - a.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
