const data = require('../data/zoo_data');

const path = data.species;
const ne = path.filter((el) => el.location === 'NE')
  .map((el) => el.name);
const nw = path.filter((el) => el.location === 'NW')
  .map((el) => el.name);
const se = path.filter((el) => el.location === 'SE')
  .map((el) => el.name);
const sw = path.filter((el) => el.location === 'SW')
  .map((el) => el.name);

const noParam = () => {
  const allPlaces = { NE: ne, NW: nw, SE: se, SW: sw };
  return allPlaces;
};

// const onlyName = () => {};

// const sortName = () => {};

// const sexName = () => {};

// const allParam = () => {};

function getAnimalMap(options) {
  return noParam();
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
