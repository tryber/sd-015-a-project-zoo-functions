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
    console.log('entrou no especie');
    const especie = animal.specie;
    const bicho = data.species.find((elemento) => elemento.name === especie);
    return bicho.residents.length;
  }
  if (Object.keys(animal).length === 2) {
    return {};
  }
}

console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'bears', gender: 'female' }));

module.exports = countAnimals;
