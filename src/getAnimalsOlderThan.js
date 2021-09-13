const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // O método find() retorna o valor do primeiro elemento do array data.species que satisfaz o teste. O método find() retorna o valor do primeiro elemento de um array que retornar true para uma função de teste fornecida. Se não houver alguma, retorna undefined.
  // residents.every vai testar se a condição é verdadeira para todos os anumais dessa especie (data.species.residents.age)
  // O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. arr.every(callback[, thisArg])

  return data.species.find((object) => object.name === animal).residents
    .every((object) => object.age > age);

  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  // Para ficar fácil de entender, pense que é como filter(), mas, ao invés de retornar outro array/objeto com os correspondentes, retorna somente o primeiro valor/objeto que passe no teste (que é uma função).
  // https://desenvolvimentoparaweb.com/javascript/every-some-find-includes-javascript/
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
}

module.exports = getAnimalsOlderThan;
