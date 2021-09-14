const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(...animal) {
  const resultado = species.filter(elemento => animal.includes(elemento));
  return resultado;
}

console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
