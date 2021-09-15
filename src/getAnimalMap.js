const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function noParameters() {
  return {
    NE: species.filter((elem) => elem.location === 'NE').map((e) => e.name),
    NW: species.filter((elem) => elem.location === 'NW').map((e) => e.name),
    SE: species.filter((elem) => elem.location === 'SE').map((e) => e.name),
    SW: species.filter((elem) => elem.location === 'SW').map((e) => e.name),
  };
}

function animalName(sorted, sex) {
}

function getAnimalMap(options) {
  if (options === undefined) return noParameters();
  if (options.includeNames === true) return animalName();
}

module.exports = getAnimalMap;
