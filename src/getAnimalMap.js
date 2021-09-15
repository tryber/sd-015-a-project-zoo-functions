const data = require('../data/zoo_data');

const { species } = data;
const getAllLocations = () => {
  const locations = [];
  species.forEach((e) => {
    if (!locations.includes(e.location)) locations.push(e.location);
  });
  return locations;
};

const noParamAnimals = (locationsCallBack) => {
  const obj = {};
  locationsCallBack().forEach((element) => {
    obj[`${element}`] = species
      .filter((animal) => animal.location === element)
      .map((e) => e.name);
  });
  return obj;
};

const includeNamesAnimals = (options) => {
  const obj = {};
  const locations = getAllLocations();
  const { includeNames, sorted } = options;
  if (includeNames && !sorted) {
    locations.forEach((element) => {
      obj[`${element}`] = species
        .filter((animal) => animal.location === element)
        .map((e) => Object.fromEntries([[e.name, e.residents.map((n) => n.name)]]));
    });
  }
  if (includeNames && sorted) {
    locations.forEach((element) => {
      obj[`${element}`] = species
        .filter((animal) => animal.location === element)
        .map((e) => Object.fromEntries([[e.name, e.residents.map((n) => n.name).sort()]]));
    });
  }
  return obj;
};

function getAnimalMap(options) {
  if (!options) return noParamAnimals(getAllLocations);
  const { sex } = options;
  if (!sex) return includeNamesAnimals(options);
}
console.log(getAnimalMap({ includeNames: true, sorted: true }));
module.exports = getAnimalMap;
