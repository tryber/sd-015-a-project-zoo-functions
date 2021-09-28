const data = require('../data/zoo_data');

function mapGeneral() {
  const animalNE = data.species.filter((specie) => specie.location === 'NE');
  const animalNW = data.species.filter((specie) => specie.location === 'NW');
  const animalSE = data.species.filter((specie) => specie.location === 'SE');
  const animalSW = data.species.filter((specie) => specie.location === 'SW');
  return {
    NE: animalNE.map((animal) => animal.name),
    NW: animalNW.map((animal) => animal.name),
    SE: animalSE.map((animal) => animal.name),
    SW: animalSW.map((animal) => animal.name),
  };
}

// src: https://stackoverflow.com/questions/45035514/split-object-into-two-properties
// me salvou na maneira certa de retorna o objeto
function mapIncludeNames(location) {
  const animalMap = data.species.filter((specie) => specie.location === location);
  const objectMap = animalMap.map((specie) => (
    { [specie.name]: specie.residents.map((resident) => resident.name) }
  ));
  return objectMap;
}

function mapIncludeNamesSort(location) {
  const animalMap = data.species.filter((specie) => specie.location === location);
  const objectMap = animalMap.map((specie) => (
    { [specie.name]: specie.residents.map((resident) => resident.name).sort() }
  ));
  return objectMap;
}

// verify sex

function mapIncludeNamesSex(location, options) {
  const animalMapa = data.species.filter((specie) => specie.location === location);
  const objectMap = animalMapa.map((specie) => (
    { [specie.name]: specie.residents.filter((resident) => resident.sex === options.sex)
      .map((animal) => animal.name) }));
  return objectMap;
}

function objsex(sex) {
  return {
    NE: mapIncludeNamesSex('NE', sex),
    NW: mapIncludeNamesSex('NW', sex),
    SE: mapIncludeNamesSex('SE', sex),
    SW: mapIncludeNamesSex('SW', sex),
  };
}

// verify sex sorted

function mapIncludeNamesSexSorted(location, options) {
  const animalMapa = data.species.filter((specie) => specie.location === location);
  const objectMap = animalMapa.map((specie) => (
    { [specie.name]: specie.residents.filter((resident) => resident.sex === options.sex)
      .map((animal) => animal.name).sort() }));
  return objectMap;
}

function objsexSorted(sex) {
  return {
    NE: mapIncludeNamesSexSorted('NE', sex),
    NW: mapIncludeNamesSexSorted('NW', sex),
    SE: mapIncludeNamesSexSorted('SE', sex),
    SW: mapIncludeNamesSexSorted('SW', sex),
  };
}

function mapIncludeNamesAssing() {
  return {
    NE: mapIncludeNames('NE'),
    NW: mapIncludeNames('NW'),
    SE: mapIncludeNames('SE'),
    SW: mapIncludeNames('SW'),
  };
}

function mapIncludeNamesAssingSort() {
  return {
    NE: mapIncludeNamesSort('NE'),
    NW: mapIncludeNamesSort('NW'),
    SE: mapIncludeNamesSort('SE'),
    SW: mapIncludeNamesSort('SW'),
  };
}

function verifySorted(options) {
  if (options.sorted === undefined) {
    return mapIncludeNamesAssing();
  } if (options.sorted) return mapIncludeNamesAssingSort();
}

function verifySexSorted(options) {
  if (!options.sorted) {
    return objsex(options);
  } return objsexSorted(options);
}

function getAnimalMap(options) {
  if (!options) {
    return mapGeneral();
  } if (options.sex === undefined) {
    return verifySorted(options);
  } if (options.includeNames && options.sex !== undefined) {
    return verifySexSorted(options);
  } return mapGeneral();
}

module.exports = getAnimalMap;
