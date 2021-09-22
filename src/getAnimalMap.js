const data = require('../data/zoo_data');

const { species } = data;
const locations = ['NE', 'NW', 'SE', 'SW'];

const receiveLocation = (location) => species
  .filter((locationAnimal) => locationAnimal.location === location)
  .map((arrayAnimals) => arrayAnimals.name);

const sexSorted = (currentLocation, sex, sorted) => {
  if (sorted) {
    return receiveLocation(currentLocation).map((element) => ({
      [element]: species.find((animal) => animal.name === element)
        .residents
        .filter((sexAnimal) => sexAnimal.sex === sex)
        .map((namesAnimals) => namesAnimals.name).sort(),
    }));
  }
  return receiveLocation(currentLocation).map((element) => ({
    [element]: species.find((animal) => animal.name === element)
      .residents
      .filter((sexAnimal) => sexAnimal.sex === sex)
      .map((namesAnimals) => namesAnimals.name),
  }));
};

const receiveLocationWithNames = (currentLocation, sex, sorted) => {
  if (sex) {
    return sexSorted(currentLocation, sex, sorted);
  }
  if (sorted) {
    return receiveLocation(currentLocation).map((element) => ({
      [element]: species.find((animal) => animal.name === element)
        .residents
        .map((namesAnimals) => namesAnimals.name).sort(),
    }));
  }
  if (!sex && !sorted) {
    return receiveLocation(currentLocation).map((element) => ({
      [element]: species.find((animal) => animal.name === element)
        .residents
        .map((namesAnimals) => namesAnimals.name),
    }));
  }
};

const allLocations = () => locations.reduce((objectLocations, currentLocation) => {
  const finalObject = objectLocations;
  finalObject[currentLocation] = receiveLocation(currentLocation);
  return finalObject;
}, {});

const allLocationsWithNames = ({ sex, sorted }) => {
  const locationWithName = locations.reduce((objectLocations, currentLocation) => {
    const finalObject = objectLocations;
    finalObject[currentLocation] = receiveLocationWithNames(currentLocation, sex, sorted);
    return finalObject;
  }, {});
  return locationWithName;
};

function getAnimalMap(options) {
  if (!options) return allLocations();
  if (!options.includeNames) return allLocations();
  if (options) return allLocationsWithNames(options);
}
module.exports = getAnimalMap;
