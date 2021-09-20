const data = require('../data/zoo_data');

const { species } = data;

const neAnimals = species.filter((aux) => aux.location === 'NE');
const nwAnimals = species.filter((aux) => aux.location === 'NW');
const seAnimals = species.filter((aux) => aux.location === 'SE');
const swAnimals = species.filter((aux) => aux.location === 'SW');
const animalNames = species.map((aux) => `${aux.name}`);
console.log(animalNames);

function getAnimalMap(options) {
  // seu código aqui
  // sem parametro
  if (!options) {
    return {
      NE: neAnimals.map((aux) => `${aux.name}`),
      NW: nwAnimals.map((aux) => `${aux.name}`),
      SE: seAnimals.map((aux) => `${aux.name}`),
      SW: swAnimals.map((aux) => `${aux.name}`),
    };
  }
  const { incldesNames, sorted, sex } = options;
  if (sorted === true) {
    return animalNames.sort()
    
  }
 
}

module.exports = getAnimalMap;

/*    NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes'], */
// console.log(getAnimalMap());
