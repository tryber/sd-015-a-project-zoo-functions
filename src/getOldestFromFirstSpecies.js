const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const empregado = data.employees.find((element) => element.id === id).responsibleFor; // array de empregados
  const animal = data.species.find((specie) => specie.id === empregado[0]).residents;
  // o id do animal que seja igual ao id do animal no primeiro índice que o empregado cuida.
  const oldestAnimal = animal.sort((a, b) => b.age - a.age);
  return Object.values(oldestAnimal[0]);
}

module.exports = getOldestFromFirstSpecies;
