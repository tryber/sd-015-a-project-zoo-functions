const data = require('../data/zoo_data');

const listAnimalsByLocation = () => {
  const { species } = data;
  const NE = species.filter((specie) => specie.location === 'NE');
  const NW = species.filter((specie) => specie.location === 'NW');
  const SE = species.filter((specie) => specie.location === 'SE');
  const SW = species.filter((specie) => specie.location === 'SW');
  return { NE, NW, SE, SW };
};

/* {
  NE: [
    {
      id: '0938aa23-f153-4937-9f88-4858b24d6bce',
      name: 'lions',
      popularity: 4,
      location: 'NE',
      availability: [Array],
      residents: [Array]
    },
    {
      id: '01422318-ca2d-46b8-b66c-3e9e188244ed',
      name: 'giraffes',
      popularity: 4,
      location: 'NE',
      availability: [Array],
      residents: [Array]
    }
  ], */

const listAnimals = () => {
  const animals = listAnimalsByLocation();
  let { NE, NW, SE, SW } = animals;
  NE = NE.map((animal) => animal.name);
  NW = NW.map((animal) => animal.name);
  SE = SE.map((animal) => animal.name);
  SW = SW.map((animal) => animal.name);
  return { NE, NW, SE, SW };
};

const getResidents = (location, obj) =>
  obj[location].map((animalType) => {
    const names = animalType.residents.map((resident) => resident.name);
    const newObj = {};
    newObj[animalType.name] = names;
    return newObj;
  });

const getResidentsSorted = (location, obj) =>
  obj[location].map((animalType) => {
    const names = animalType.residents.map((resident) => resident.name).sort();
    const newObj = {};
    newObj[animalType.name] = names;
    return newObj;
  });

const listAnimalsWithResidents = (sort) => {
  const animals = listAnimalsByLocation();
  const keys = Object.keys(animals);
  const newObj = {};
  keys.forEach((key) => {
    if (sort) {
      newObj[key] = getResidentsSorted(key, animals);
    } else {
      newObj[key] = getResidents(key, animals);
    }
  });
  return newObj;
};

function getAnimalMap(options) {
  // seu código aqui
  if (options === undefined) return listAnimals();
  const { includeNames, sorted } = options;
  if (includeNames === true && sorted !== true) return listAnimalsWithResidents();
  if (includeNames === true && sorted === true) return listAnimalsWithResidents(sorted);
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
