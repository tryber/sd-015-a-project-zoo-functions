const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const resultado = {};
  if (animal === undefined) {
    species.forEach((elemento) => { resultado[elemento.name] = elemento.residents.length; });
    return resultado;
  }
  const { specie, sex } = animal;
  const animalMal = species.find((elemento) => elemento.name === specie).residents;
  const residentes = animalMal.reduce((acm, elem) => (elem.sex === sex ? acm + 1 : acm), 0);
  return sex === undefined ? animalMal.length : residentes;
}

module.exports = countAnimals;
