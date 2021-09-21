const data = require('../data/zoo_data');

const { species } = data;

function animalsByLocation(options) {
    return species.reduce((acc, curr) => {
      const speciesByLocation = species.filter((specie) => specie.location.includes(curr.location)).map((specieFiltered) => specieFiltered.name);
      acc[curr.location] = speciesByLocation
      return acc;
    }, {});
}
// console.log(animalsByLocation());

function teste(param) {
  const exemplaryByLocation = species.filter((specie) => specie.location === param);
  // exemplaryByLocation.map((exemplary) => exemplary.residents)
  // console.log(exemplaryByLocation.residents.map((resident) => resident.name))
  return exemplaryByLocation.residents.map((resident) => resident.name)
}
// console.log(teste('NE'))
function sortedTrue() {

  return species.reduce((acc, curr) => {
    // const speciesByLocation = species.filter((specie) => specie.location.includes(curr.location))
    //   .map((specieFiltered) => specieFiltered.name);
      // console.log(speciesByLocation)
      // const teste1 = speciesByLocation.map((animal) => ({
      //   [animal]: curr.residents.map((beast) => beast.name),
      // }));
      if (acc[curr.location] === undefined) {
        acc[curr.location] = [];
      }
      acc[curr.location] = [...acc[curr.location], {
        [curr.name]: curr.residents.map((beast) => beast.name),
      }]
    // console.log('aqui',acc)
    return acc;
  }, {});
}
console.log(sortedTrue())
function getAnimalMap(options) {
  // seu código aqui
  if (!options) return animalsByLocation();
  if (options.includeNames) return sortedTrue();
}
// console.log(getAnimalMap())
module.exports = getAnimalMap;
