const data = require('../data/zoo_data');

const aniMap = {
  NW: [],
  NE: [],
  SW: [],
  SE: [],
};
data.species.map((beast) => aniMap[beast.location].push(beast.name));

function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return aniMap;
  }
  if (options.includeNames === true) {
    return 0;
  }
}
module.exports = getAnimalMap;
