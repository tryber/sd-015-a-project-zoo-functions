const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const empregado = employees.find((element) => element.id === id).responsibleFor;
  const primeiraEsp = empregado.find((element) => empregado[0]);
  const idAnimal = species.find((element) => element.id === primeiraEsp).residents;
  const olderest = idAnimal.sort((a, b) => (b.age - a.age));
  return Object.values(olderest[0]);
}

module.exports = getOldestFromFirstSpecies;
