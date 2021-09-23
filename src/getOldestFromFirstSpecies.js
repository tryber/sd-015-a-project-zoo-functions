const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const firstEmployee = employees.find((employee) => employee.id === id);
  const firstAnimalResponsible = species.find((specie) => specie.id === firstEmployee);
  const getOlderAnimal = firstAnimalResponsible.reduce((acumulador, valorCorrente) =>
    ((acumulador.age > valorCorrente.age) ? acumulador : valorCorrente));
  return Object.values(getOlderAnimal);
};

module.exports = getOldestFromFirstSpecies;
