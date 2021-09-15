const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalFind = species.find((especies) => especies.name === animal);
  const animalResidente = animalFind.residents;
  return animalResidente.every((especie) => especie.age >= age);
}
// no animalFind pego o priemrio elemento q tenha o nome do elemento(especies) = ao parametro name.
// na linha 6 declaro a const com o resultado de animalFind na posicao de residents
// na linha 7 eu retorno  o const animalResidente aplicando a hof every nela, onde verifica se todos sos elementos possuem no minimo a idade passada no parametro age

module.exports = getAnimalsOlderThan;
