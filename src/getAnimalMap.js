const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function createMap() {
  return {
    NE: species.filter((specie) =>
      specie.location.includes('NE')).map((specie) => specie.name),
    NW: species.filter((specie) =>
      specie.location.includes('NW')).map((specie) => specie.name),
    SE: species.filter((specie) =>
      specie.location.includes('SE')).map((specie) => specie.name),
    SW: species.filter((specie) =>
      specie.location.includes('SW')).map((specie) => specie.name),
  }
}

function createMapNames() {
  return {
    NE: species.filter((specie) =>
      specie.location.includes('NE')).map((specie) => specie.residents),
    NW: species.filter((specie) =>
      specie.location.includes('NW')).map((specie) => specie.residents.name),
    SE: species.filter((specie) =>
      specie.location.includes('SE')).map((specie) => specie.residents.name),
    SW: species.filter((specie) =>
      specie.location.includes('SW')).map((specie) => specie.residents.name),
  }
}

function getAnimalMap(includeNames = false, sorted = false, sex = undefined, sort = false) {
  // seu código aqui
  if (includeNames === false) {
    return createMap();
  }
  return createMapNames();
}

module.exports = getAnimalMap;

console.log(getAnimalMap({ includeNames: true }));
