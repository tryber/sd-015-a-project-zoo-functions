const data = require('../data/zoo_data');
// { [specie.location]: specie.name })
const [...species] = data.species;

function getSpeciesByLocation(speciesToSearch, location) {
  const specie = speciesToSearch.filter((specieToSearch) => specieToSearch.location === location);
  const arrayOfSpecies = [];
  specie.forEach((element) => {
    arrayOfSpecies.push(element.name);
  });
  return arrayOfSpecies;
}

function getAnimalMap(options) {
  if (!options) {
    const neSpecies = getSpeciesByLocation(species, 'NE');
    const nwSpecies = getSpeciesByLocation(species, 'NW');
    const seSpecies = getSpeciesByLocation(species, 'SE');
    const swSpecies = getSpeciesByLocation(species, 'SW');
    return {
      NE: neSpecies,
      NW: nwSpecies,
      SE: seSpecies,
      SW: swSpecies,
    };
  }
  if (options.includeNames) {

  }
}
//
console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
