const data = require('../data/zoo_data');

// Function to return the species by location if no parameters is assined
function getAnimalsByLocation() {
  const { species } = data;
  const NE = species.filter(({ location }) => location === 'NE').map((info) => info.name);
  const NW = species.filter(({ location }) => location === 'NW').map((info) => info.name);
  const SE = species.filter(({ location }) => location === 'SE').map((info) => info.name);
  const SW = species.filter(({ location }) => location === 'SW').map((info) => info.name);
  return { NE, NW, SE, SW };
}

function getAnimalMap(options) {

}

getAnimalsByLocation();

module.exports = getAnimalMap;
