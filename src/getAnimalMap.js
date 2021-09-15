const data = require('../data/zoo_data');

function getAnimalsByLocation(location, ...args) {
  let filters = [...args];
  [, ...filters] = filters;
  const [callback] = [...args];
  return data.species.filter((specie) =>
    (specie.location === location)).map((specie) => callback(specie, filters));
}

function speciesName(specie) {
  return specie.name;
}

function residentsName(specie) {
  return { [specie.name]: specie.residents.map((resident) => resident.name) };
}

function sortedResidentsName(specie) {
  return { [specie.name]: specie.residents.map((resident) => resident.name).sort() };
}

function residentsBySex(...args) {
  const [specie, [sorted, sex]] = [...args];
  const obj = { [specie.name]: specie.residents.filter((resident) =>
    resident.sex === sex).map((resident) => resident.name) };
  if (sorted === true) {
    obj[specie.name].sort();
  }
  return obj;
}

function getMap(...args) {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  const map = {};
  locations.forEach((location) => {
    (map[location] = getAnimalsByLocation(location, ...args));
  });
  return map;
}

function getAnimalMap(options = {}) {
  // seu código aqui
  const { includeNames, sorted, sex } = options;
  if (!includeNames || includeNames !== true) {
    return getMap(speciesName);
  }
  if (!sex) {
    return (sorted !== true) ? getMap(residentsName) : getMap(sortedResidentsName);
  }
  return getMap(residentsBySex, sorted, sex);
}

module.exports = getAnimalMap;

console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
