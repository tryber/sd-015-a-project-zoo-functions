const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const base = species.reduce((acc, actual) => {
  acc[actual.location] = [...acc[actual.location], actual.name];
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

function withName(options) {
  return species.reduce((acc, act) => {
    if (options.sorted) { // Lógica do If dentro do reduce feita com Marcelo Adriano, Eric Cruz e Pedro
      acc[act.location] = [...acc[act.location], { [act.name]: act.residents.map((unit) =>
        unit.name).sort() }];
    } else {
      acc[act.location] = [...acc[act.location], { [act.name]: act.residents.map((unit) =>
        unit.name) }];
    }
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}

function withSex(options) {
  return species.reduce((acc, actual) => {
    if (options.sorted) { // Lógica do If dentro do reduce feita com Marcelo Adriano, Eric Cruz e Pedro
      acc[actual.location] = [...acc[actual.location],
        { [actual.name]: actual.residents.filter((unit) => unit.sex === options.sex).map((unit2) =>
          unit2.name).sort() }];
    } else {
      acc[actual.location] = [...acc[actual.location],
        { [actual.name]: actual.residents.filter((unit) => unit.sex === options.sex).map((unit2) =>
          unit2.name) }];
    }
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}

function getAnimalMap(options = {}) {
  // seu código aqui
  if (Object.keys(options).length === 0 || !options.includeNames) {
    return base;
  }
  if (options.sex) return withSex(options);
  return withName(options);
}

module.exports = getAnimalMap;
