const zooData = require('../data/zoo_data');
const data = require('../data/zoo_data');

/* Esta função é responsável pela busca das
espécies de animais por id. Ela retorna um array contendo
as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids. */

function getSpeciesByIds(...ids) {
  // seu código aqui
  const especiesData = zooData.species;
  return especiesData.filter((animals) => ids.includes(animals.id));
}

module.exports = getSpeciesByIds;
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
// console.log(zooData.species);
