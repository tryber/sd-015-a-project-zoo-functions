const data = require('../data/zoo_data');

function getAnimalsByLocation(location, callback) {
  return data.species.filter((specie) =>
    (specie.location === location)).map((specie) => callback(specie));
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

function getMap(param) {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  const map = {};
  locations.forEach((location) => {
    (map[location] = getAnimalsByLocation(location, param));
  });
  return map;
}

function getAnimalMap(options = {}) {
  // seu código aqui
  const { includeNames, sorted, sex } = options;
  if (!includeNames || includeNames !== true) {
    return getMap(speciesName);
  }
  return (sorted !== true) ? getMap(residentsName) : getMap(sortedResidentsName);
}

module.exports = getAnimalMap;

console.table(getAnimalMap({ includeNames: true, sorted: true }));
