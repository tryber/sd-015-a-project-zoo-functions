const data = require('../data/zoo_data');

const nordEste = data.species.filter((region) => region.location === 'NE');
const noroWest = data.species.filter((region) => region.location === 'NW');
const sudEste = data.species.filter((region) => region.location === 'SE');
const sudoWeste = data.species.filter((region) => region.location === 'SW');

function getNull() {
  const NE = nordEste.map((name) => name.name);
  const NW = noroWest.map((name) => name.name);
  const SE = sudEste.map((name) => name.name);
  const SW = sudoWeste.map((name) => name.name);
  return { NE, NW, SE, SW };
}

function getAnimal() {
  const NE = nordEste.map(({ name, residents }) => ({ [name]: residents
    .reduce((acc, curr) => acc.concat(curr.name), []) }));
  const NW = noroWest.map((name) => ({ [name.name]: name.residents
    .reduce((acc, curr) => acc.concat(curr.name), []) }));
  const SE = sudEste.map((name) => ({ [name.name]: name.residents
    .reduce((acc, curr) => acc.concat(curr.name), []) }));
  const SW = sudoWeste.map((name) => ({ [name.name]: name.residents
    .reduce((acc, curr) => acc.concat(curr.name), []) }));

  return { NE, NW, SE, SW };
}

function getSorted() {
  const NE = nordEste.map(({ name, residents }) => ({ [name]: residents
    .reduce((acc, curr) => acc.concat(curr.name), []).sort() }));
  const NW = noroWest.map((name) => ({ [name.name]: name.residents
    .reduce((acc, curr) => acc.concat(curr.name), []).sort() }));
  const SE = sudEste.map((name) => ({ [name.name]: name.residents
    .reduce((acc, curr) => acc.concat(curr.name), []).sort() }));
  const SW = sudoWeste.map((name) => ({ [name.name]: name.residents
    .reduce((acc, curr) => acc.concat(curr.name), []).sort() }));

  return { NE, NW, SE, SW };
}

function getSex(sex) {
  const NE = nordEste.map(({ name, residents }) => ({ [name]: residents
    .reduce((acc, curr) => ((curr.sex === sex) ? acc.concat(curr.name) : acc), []) }));
  const NW = noroWest.map((name) => ({ [name.name]: name.residents
    .reduce((acc, curr) => ((curr.sex === sex) ? acc.concat(curr.name) : acc), []) }));
  const SE = sudEste.map((name) => ({ [name.name]: name.residents
    .reduce((acc, curr) => ((curr.sex === sex) ? acc.concat(curr.name) : acc), []) }));
  const SW = sudoWeste.map((name) => ({ [name.name]: name.residents
    .reduce((acc, curr) => ((curr.sex === sex) ? acc.concat(curr.name) : acc), []) }));

  return { NE, NW, SE, SW };
}

function getSexSort(sex) {
  const NE = nordEste.map(({ name, residents }) => ({ [name]: residents
    .reduce((acc, curr) => ((curr.sex === sex) ? acc.concat(curr.name) : acc), []).sort() }));
  const NW = noroWest.map((name) => ({ [name.name]: name.residents
    .reduce((acc, curr) => ((curr.sex === sex) ? acc.concat(curr.name) : acc), []).sort() }));
  const SE = sudEste.map((name) => ({ [name.name]: name.residents
    .reduce((acc, curr) => ((curr.sex === sex) ? acc.concat(curr.name) : acc), []).sort() }));
  const SW = sudoWeste.map((name) => ({ [name.name]: name.residents
    .reduce((acc, curr) => ((curr.sex === sex) ? acc.concat(curr.name) : acc), []).sort() }));

  return { NE, NW, SE, SW };
}

function getAnimalFunctions(sorted, sex) {
  if (sex && sorted) return getSexSort(sex);
  if (sex) return getSex(sex);
  if (sorted) return getSorted();
  return false;
}

function getAnimalMap(options) {
  if (!options) return getNull();
  const { includeNames = false, sorted = false, sex = false } = options;
  if (!includeNames) return getNull();
  const result = (getAnimalFunctions(sorted, sex));
  if (!result) return getAnimal();
  return result;
}

module.exports = getAnimalMap;
