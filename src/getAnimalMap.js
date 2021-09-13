// const { seedValue } = require('faker');
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// nas const abaixos eu armazeno o objeto com cada respectiva localizacao
const ne = species.filter((element) => element.location === 'NE');
const nw = species.filter((element) => element.location === 'NW');
const se = species.filter((element) => element.location === 'SE');
const sw = species.filter((element) => element.location === 'SW');

// na funcao abaixo ultilizo as const criadas acima para pegar a especie de cada anima
function getLocation() {
  return ({
    NE: ne.map((element) => element.name),
    NW: nw.map((element) => element.name),
    SE: se.map((element) => element.name),
    SW: sw.map((element) => element.name),
  });
}

// uso os objetos de casa loc para criar um novo obj com o nome de cada um dos animais
function animalNamesByLocation() {
  return ({
    NE: ne.map((element) => ({
      [element.name]: element.residents.map((elemento) => elemento.name),
    })),
    NW: nw.map((element) => ({
      [element.name]: element.residents.map((elemento) => elemento.name),
    })),
    SE: se.map((element) => ({
      [element.name]: element.residents.map((elemento) => elemento.name),
    })),
    SW: sw.map((element) => ({
      [element.name]: element.residents.map((elemento) => elemento.name),
    })),
  });
}

// funcao onde executo todas as outras
function getAnimalMap(options) {
  if (options === undefined) {
    return getLocation();
  }
  const { includeNames } = options;
  if (includeNames) {
    return animalNamesByLocation();
  }
}

module.exports = getAnimalMap;
