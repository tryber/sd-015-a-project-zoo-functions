const data = require('../data/zoo_data');

const { species } = data;

const receiveLocation = (location) => {
  return species
    .filter((locationAnimal) => locationAnimal.location === location)
    .map((arrayAnimals) => arrayAnimals.name);
};
// const receiveLocation2 = (location) => {
//   return species
//     .filter((locationAnimal) => locationAnimal.location === location)
//     .reduce((atual, current) => , [])
// };
// console.log(receiveLocation2('NE'));

const allLocations = () => {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  return locations.reduce((objectLocations, currentLocation) => {
    const finalObject = objectLocations;
    finalObject[currentLocation] = receiveLocation(currentLocation);
    return finalObject;
  }, {});
};
// const newobjs = receiveLocation('NE').reduce((objectAnimals, currentAnimal) => {
//   const objctFinal = objectAnimals;
//   objctFinal.push({
//     [currentAnimal]: species.find((element) => element.name === currentAnimal),
//   });
//   return objctFinal;
// }, []);

// const locationWithName = () => {
//   const locations = ['NE', 'NW', 'SE', 'SW'];
//   return locations.reduce((objectLocations, currentLocation) => {
//     const finalObject = objectLocations;
//     finalObject[currentLocation] = receiveLocation(currentLocation).reduce(() =>);
//     return finalObject;
//   }, {});
// }

function getAnimalMap(options) {
  if (!options) return allLocations();

  // if(options.includeNames === true)
}

console.log(getAnimalMap());
module.exports = getAnimalMap;
