const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { residents } = data.species.find((specie) => specie.name === animal);
  const targetAnimal = residents.every((zooAnimal) => zooAnimal.age > age);
  return targetAnimal;
}

// Criei uma constante para receber todos os animais residentes; usei o find para encontrar os animais que correspondiam ao parâmetro, onde usei uma arrowFunction para ditar a condição.
// Criei uma constante para receber todos os animais que a idade era superior ao do parâmetro.

module.exports = getAnimalsOlderThan;
