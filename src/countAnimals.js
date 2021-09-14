const data = require('../data/zoo_data');

function countAnimals(animal) {
  function criaObjeto(acumulador, especie) {
    const acc = acumulador;
    acc[especie.name] = especie.residents.length;
    return acc;
  }
  if (animal === undefined) {
    const Animais = data.species.reduce(criaObjeto, {});
    return Animais;
  }
  if (animal.length === 1) {
    return {};
  }
  if (animal.length === 2) {
    return {};
  }
}

module.exports = countAnimals;
