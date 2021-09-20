const data = require('../data/zoo_data');
const { location } = data;

function getAnimalMap(options) {
  if (!options) {
    const allAnimalsForlocal = options.filter((animal) => animal.location).length;
    allAnimalsForlocal.reduce((accumulator, currenteValue) )
    console.log(allAnimalsForlocal);
  }
  // seu código aqui
}

module.exports = getAnimalMap;
