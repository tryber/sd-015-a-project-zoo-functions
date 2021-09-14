const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal) {
    const nome = species.filter((item) => item.name === animal.specie);
    const lista = nome.pop().residents;
    if (animal.sex) {
      return lista.filter((item) => item.sex === animal.sex).length;
    }
    return lista.length;
  }

  return species.reduce((acc, item) => ({
    ...acc,
    [item.name]: item.residents.length,
  }), {});
}
console.log(countAnimals({ specie: 'bears', sex: 'female' }))
module.exports = countAnimals;
