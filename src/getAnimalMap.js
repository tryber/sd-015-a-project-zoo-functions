const data = require('../data/zoo_data');

const { species } = data;

const categoryLocation = {
  NE: species.filter((animals) => animals.location === 'NE').map((specie) => specie.name),
  NW: species.filter((animals) => animals.location === 'NW').map((specie) => specie.name),
  SE: species.filter((animals) => animals.location === 'SE').map((specie) => specie.name),
  SW: species.filter((animals) => animals.location === 'SW').map((specie) => specie.name),
};

function getAnimalMap(options) {
  if (!options) return categoryLocation;
}

module.exports = getAnimalMap;
