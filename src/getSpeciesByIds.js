const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // console.log(ids);
  // ids é um array
  // O método map() invoca a função callback para cada elemento do Array ids e devolve um novo Array como resultado.
  // O método find() retorna o valor do primeiro elemento do array data.species que satisfaz o teste. Id é unico por isso utilizei o metodo find.
  return ids.map((id) => data.species.find((object) => object.id === id));
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
