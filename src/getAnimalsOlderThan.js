const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// necessário verificar se todos os animais passados como parametro (name) tem idade maior ou igual ao parametro paassado (age)
function getAnimalsOlderThan(animal, age) {
  const animalDesejado = species.find((object) => object.name === animal);
  return animalDesejado.residents.every((element) => element.age >= age);
  // realaizei um find pra gerar um array com os animais filtrados pelo name e depois verifiquei a idade dos residentes da especie com o every(
}

module.exports = getAnimalsOlderThan;
