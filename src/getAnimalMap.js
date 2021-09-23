const data = require('../data/zoo_data');

const spec = data.species;

const ne = spec.filter((elem) => elem.location === 'NE').map((elem) => elem.name);

const nw = spec.filter((elem) => elem.location === 'NW').map((elem) => elem.name);

const se = spec.filter((elem) => elem.location === 'SE').map((elem) => elem.name);

const sw = spec.filter((elem) => elem.location === 'SW').map((elem) => elem.name);

const animalPlace = () => {
  const places = { NE: ne, NW: nw, SE: se, SW: sw };
  return places;
};
function getAnimalMap(options) {
  return animalPlace();
}

module.exports = getAnimalMap;
