const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');


function getAnimalMap(options) {
  const arrayLocations = ['NE', 'NW', 'SE', 'SW'];
  const animalMap = arrayLocations.map((location) => species.filter((specie) => specie.location === location).map((obj) => obj.name));

  if (options === undefined) {
    const objAnimalMap = animalMap.map((animal, index) => {
      const obj = {};
      obj[arrayLocations[index]] = animal;
      return obj;
    });
    const animalReduced = objAnimalMap.reduce((acc, obj) => Object.assign(acc, obj), {});
    return animalReduced;
  }

  const residentMap = animalMap.map((animal) => animal.map((spc) => {
   const specieResidents = species.find((specie) => specie.name === spc).residents;
      if (options.sex && options.sorted === undefined) {
        const residentsFiltered = specieResidents.filter((specie) => specie.sex === options.sex);
        // if (options.sorted) {
        //   return residentsFiltered.sort((a, b) => a.name > b.name ? 1 : -1);
        // }
        return residentsFiltered;
      }
    if (options.sorted && options.sex != 'female' || options.sex != 'male') {
      console.log('testeeeeeeeeee');
        return specieResidents.sort((a, b) => a.name > b.name ? 1 : -1);
      } 
      return specieResidents;
  }).map((array, index) => {
      const obj = {};
      obj[animal[index]] = array.map((resident) => resident.name);
      if (options.includeNames) {
        return obj;
      }
        return Object.keys(obj)[0];
      }
    ));
  
  const objtResidentMap = residentMap.map((animal, index) => {
    const obj = {};
    obj[arrayLocations[index]] = animal;
    return obj;
  });
    const residentReduced = objtResidentMap.reduce((acc, obj) => Object.assign(acc, obj), {});
    return residentReduced;

}
console.log(getAnimalMap({ includeNames: true, sex: 'female' }))
module.exports = getAnimalMap;
