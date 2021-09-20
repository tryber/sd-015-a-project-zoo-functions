const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
  if (options === undefined) {
    const toReturn = species.sort((a, b) => a.location - b.location);
    console.log(toReturn);
  }
}
module.exports = getAnimalMap;
/* console.log(getAnimalMap()); */