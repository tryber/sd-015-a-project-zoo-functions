const data = require('../data/zoo_data');

const { species } = data;

const neRegion = species.filter((element) => element.location === 'NE');

const nwRegion = species.filter((element) => element.location === 'NW');

const seRegion = species.filter((element) => element.location === 'SE');

const swRegion = species.filter((element) => element.location === 'SW');

const neAnimals = neRegion.map((element) => element.name);

const nwAnimals = nwRegion.map((element) => element.name);

const seAnimals = seRegion.map((element) => element.name);

const swAnimals = swRegion.map((element) => element.name);

function getAnimalMap({...options } = {}) {
  if (Object.values(options).length < 1) {
    return {
      NE: neAnimals,
      NW: nwAnimals,
      SE: seAnimals,
      SW: swAnimals,
    }
  }
}

// console.log(getAnimalMap());

module.exports = getAnimalMap;
