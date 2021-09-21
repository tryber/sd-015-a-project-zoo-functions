const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// repositorio do José Carlos consultado nessa parte  - encurtador.com.br/EFH48
function getOldestFromFirstSpecies(id) {
  const funcio = employees.find((func) => func.id === id);
  const animals = species.find((animal) => animal.id === funcio.responsibleFor[0]).residents;
  const getOldest = animals.reduce((acc, curr) => ((acc.age > curr.age) ? acc : curr));
  return Object.values(getOldest);
}

module.exports = getOldestFromFirstSpecies;
