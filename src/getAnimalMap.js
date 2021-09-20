const data = require('../data/zoo_data');

const { species } = data;

function getAnimalMap(options) {
  // seu código aqui
  // sem parametro
  const neAnimals = species.filter((aux) => aux.location === 'NE');
  const nwAnimals = species.filter((aux) => aux.location === 'NW');
  const seAnimals = species.filter((aux) => aux.location === 'SE');
  const swAnimals = species.filter((aux) => aux.location === 'SW');
  // return neAnimals;
  return {
    NE: neAnimals.map((aux) => `${aux.name}`),
    NW: nwAnimals.map((aux) => `${aux.name}`),
    SE: seAnimals.map((aux) => `${aux.name}`),
    SW: swAnimals.map((aux) => `${aux.name}`),
  };
}

module.exports = getAnimalMap;

/*    NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes'], */
console.log(getAnimalMap());
