const data = require('../data/zoo_data');

// teste
function countAnimals(animal = 'zero') {
  if (animal !== 'zero') {
    const a = data.species.find((elemento) => elemento.name === animal.specie);
    const contaAnimais = (valor) => a.residents.filter((elemento) => elemento.sex === valor).length;
    return animal.gender === undefined ? a.residents.length : contaAnimais(animal.gender);
  }
  return data.species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
}

console.log(countAnimals());
module.exports = countAnimals;
