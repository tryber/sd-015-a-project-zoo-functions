const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalAtual = data.species.find((nomeEspecie) => animal.includes(nomeEspecie.name));
  const { residents } = animalAtual;
  const resultadoFinal = residents.every((idade) => idade.age >= age);
  return resultadoFinal;
}

module.exports = getAnimalsOlderThan;
