const data = require('../data/zoo_data');

const defaultAnswer = () => {
  const animalsNE = data.species.filter((specie) => specie.location === 'NE');
  const animalsNW = data.species.filter((specie) => specie.location === 'NW');
  const animalsSE = data.species.filter((specie) => specie.location === 'SE');
  const animalsSW = data.species.filter((specie) => specie.location === 'SW');

  const defaultObject = {
    NE: [animalsNE[0].name, animalsNE[1].name],
    NW: [animalsNW[0].name, animalsNW[1].name, animalsNW[2].name],
    SE: [animalsSE[0].name, animalsSE[1].name],
    SW: [animalsSW[0].name, animalsSW[1].name],
  };

  return defaultObject;
};

function getAnimalMap(options) {
  if (typeof options === 'undefined') return defaultAnswer();
  const { includeNames, sorted, sex } = options;

  // return defaultAnswer();
  return `includeNames: ${includeNames}, sorted: ${sorted}, sex: ${sex}`;
}

// console.log(getAnimalMap());
// console.log(getAnimalMap({ includeNames: true }));
// console.log(getAnimalMap({ sorted: true }));
// console.log(getAnimalMap({ sex: 'male' }));
console.log(defaultAnswer());
module.exports = getAnimalMap;

const expectedDefault = {
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes'],
};

console.log(expectedDefault);
