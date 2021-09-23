const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function semParametros() {
  const value = species.filter((element) => element).map((valor) => valor.residents.length);
  const key = species.filter((element) => element).map((valor) => valor.name);
  const obj = {};
  const objeto = key.reduce((acc, curr, index) => {
    obj[curr] = value[index];
    return obj;
  }, {});
  return objeto;
}

function umParametro(parametro) {
  const a = species.filter((element) => element
    .name === parametro.specie).map((valor) => valor.residents.length);
  return a[0];
}

function doisParametros(parametro) {
  const b = species.filter((element) => element.name === parametro.specie)[0].residents;
  let cont = 0;
  for (let index = 0; index < b.length; index += 1) {
    if (b[index].sex === parametro.gender) { cont += 1; }
  }
  return cont;
}

function countAnimals(animal) {
  if (animal === undefined) { // sem nenhum parametro
    return semParametros();
  }

  if (Object.values(animal).length === 1) { // se receber um so parametro
    return umParametro(animal);
  }
  if (Object.values(animal).length === 2) { // se receber 2 parametros
    return doisParametros(animal);
  }
}

console.log(countAnimals({ specie: 'elephants', gender: 'male' }));
module.exports = countAnimals;
