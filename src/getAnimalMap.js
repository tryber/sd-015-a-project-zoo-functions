const data = require('../data/zoo_data');

const getNameAnimal = (location) => data.species.filter((specie) => specie.location === location)
  .map((animal) => animal.name);

const locat = {
  NE: getNameAnimal('NE'),
  NW: getNameAnimal('NW'),
  SE: getNameAnimal('SE'),
  SW: getNameAnimal('SW'),
};

const x = (options = {}) => {
  const algo = data.species.reduce((fullObject, specie) => {
    const obj = fullObject;
    if (options.sorted) {
      obj[specie.location] = [...obj[specie.location],
        { [specie.name]: specie.residents.map((resident) => resident.name).sort() }];
    } else {
      obj[specie.location] = [...obj[specie.location],
        { [specie.name]: specie.residents.map((resident) => resident.name) }];
    }
    return obj;
  }, { NE: [], NW: [], SE: [], SW: [] });
  return algo;
};

const y = (options = {}) => {
  const algo = data.species.reduce((fullObject, specie) => {
    const obj = fullObject;
    if (options.sorted) {
      obj[specie.location] = [...obj[specie.location],
        { [specie.name]: specie.residents.filter((resi) =>
          resi.sex === options.sex).map((resident) => resident.name).sort() }];
    } else {
      obj[specie.location] = [...obj[specie.location],
        { [specie.name]: specie.residents.filter((resi) =>
          resi.sex === options.sex).map((resident) => resident.name) }];
    }
    return obj;
  }, { NE: [], NW: [], SE: [], SW: [] });
  return algo;
};

function getAnimalMap(options = {}) {
  // seu código aqui
  if (Object.keys(options).length === 0 || !options.includeNames) {
    return locat;
  }
  if (options.sex) {
    return y(options);
  }
  return x(options);
}

module.exports = getAnimalMap;
