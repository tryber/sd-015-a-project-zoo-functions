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

/* const sortArrayNames = () => {
  const sorted = arrayNames();
  sorted.sort();
  return sorted;
}; */

function getAnimalMap(options) {
  if (!options) {
    getAnimalLocations();
    return objLocations;
  }
}

module.exports = getAnimalMap;
