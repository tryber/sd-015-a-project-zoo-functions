const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstEmployee = employees.find((employee) => employee.id === id).responsibleFor;
  const firstAnimalResponsible = species.find((specie) => specie.id === firstEmployee[0]).residents;
  const getOlderAnimal = firstAnimalResponsible.reduce((acumulador, valorCorrente) =>
    ((acumulador.age > valorCorrente.age) ? acumulador : valorCorrente));
  return Object.values(getOlderAnimal);
}

module.exports = getOldestFromFirstSpecies;
