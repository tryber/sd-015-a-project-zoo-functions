const data = require('../data/zoo_data');

function getSpeciesByIds(...param) {
  return data.species.filter((Id) => param.includes(Id.id));
}
//includes() é uma função que nós retorna true ou false com base na condição dada
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
module.exports = getSpeciesByIds;
