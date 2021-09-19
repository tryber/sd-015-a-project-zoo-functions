const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
  if (options === undefined) {
  const toReturn = species.sort((a, b) => a.location - b.location);
  console.log(toReturn);
  }
}
console.log(getAnimalMap());

module.exports = getAnimalMap;
