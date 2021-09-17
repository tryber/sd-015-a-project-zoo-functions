const data = require('../data/zoo_data');

function criaObjeto(acumulador, especie) {
  const acc = acumulador;
  acc[especie.name] = especie.residents.length;
  return acc;
}
function countAnimals(animal) {
  if (animal === undefined) {
    const Animais = data.species.reduce(criaObjeto, {});
    return Animais;
  }
  if (Object.keys(animal).length === 1) {
    const bicho = data.species.find((elemento) => elemento.name === animal.specie);
    return bicho.residents.length;
  }
  if (Object.keys(animal).length === 2) {
    const bicho = data.species.find((elemento) => elemento.name === animal.specie);
    return bicho.residents.filter((objeto) => objeto.sex === animal.sex).length;
  }
}

// console.log(countAnimals({ specie: 'bears' }));
// console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
