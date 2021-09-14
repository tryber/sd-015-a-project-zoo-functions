const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function buildMap() {  
  const map = { NE: [], NW: [], SE: [], SW: [] };
  map.NE = data.species.filter((spec) => spec.location === 'NE');
  map.NE = map.NE.filter((spec) => spec.)
  console.log(map)
}

function getAnimalMap(options) {
  let result = { NE: [], NW: [], SE: [], SW: [] };
  const isSortTrue = options.some(() => options.sorted);
  console.log(isSortTrue);
  const isSexTrue = options.some(() => options.sex);
  const isIncludeNamesTrue = options.some(() => options.includeNames);
}

// console.log(getAnimalMap({ includeNames: true, sorted: true })) */
console.log(buildMap())
module.exports = getAnimalMap;
