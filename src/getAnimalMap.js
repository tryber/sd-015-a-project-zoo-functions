const data = require('../data/zoo_data');

const objLocations = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};

const getAnimalLocations = () => {
  objLocations.NE = data.species.filter((value) => value.location === 'NE')
    .map((value) => value.name);
  objLocations.NW = data.species.filter((value) => value.location === 'NW')
    .map((value) => value.name);
  objLocations.SE = data.species.filter((value) => value.location === 'SE')
    .map((value) => value.name);
  objLocations.SW = data.species.filter((value) => value.location === 'SW')
    .map((value) => value.name);
};
/*
const arrayNames = () => {
  Object.entries(objLocations).forEach((local) => local.forEach((animal) => animal.sort)
  // objLocations.NE.forEach((value) => value.sort);
};

const sortArrayNames = () => {
  const sorted = arrayNames();
  sorted.sort();
  return sorted;
}; */

function getAnimalMap(options) {
  getAnimalLocations();
  if (!options) {
    return objLocations;
  }
  /*
  if (options.includeNames) {
    sortArrayNames();
  }
  */
}

module.exports = getAnimalMap;
