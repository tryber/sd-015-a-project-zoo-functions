const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// repositorio do José Carlos consultado nessa parte  - encurtador.com.br/EFH48
function getOldestFromFirstSpecies(id) {
  const funcio = employees.find((func) => func.id === id);
  const animals = species.find((animal) => animal.id === funcio.responsibleFor[0]).residents;
  // console.log(animals);
  // video que me ajudou a entender reduce https://www.youtube.com/watch?v=O_bSjsLga48
  // o acumulador passa a ser aquilo que foi retornado.
  const getOldest = animals.reduce((acc, curr) => ((acc.age > curr.age) ? acc : curr));
  return Object.values(getOldest);
}

module.exports = getOldestFromFirstSpecies;
