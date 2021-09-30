const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especie = data.species.find((elemento, index) => animal === elemento.name);
  console.log(especie);
  const todosSaoMaior = especie.residents.every((elemento, index) => elemento.age >= age);
  return todosSaoMaior;
}

module.exports = getAnimalsOlderThan;
