const data = require('../data/zoo_data');

function criaObjeto(acumulador, especie) {
  const acc = acumulador;
  acc[especie.name] = especie.residents.length;
  return acc;
}
function countAnimals(animal) {
  const { specie, gender } = animal;
  if (animal === undefined) {
    const Animais = data.species.reduce(criaObjeto, {});
    return Animais;
  }
  if (Object.keys(animal).length === 1) {
    const bicho = data.species.find((elemento) => elemento.name === specie);
    return bicho.residents.length;
  }
  if (Object.keys(animal).length === 2) {
    const bicho = data.species.find((elemento) => elemento.name === specie);
    return bicho.residents
    .reduce((acumulador, elemento) => elemento.gender === gender ? 
    acumulador += 1 : acumulador, 0);
  }
}

console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'bears', gender: 'female' }));

module.exports = countAnimals;
