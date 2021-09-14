const data = require('../data/zoo_data');

const animalsNE = data.species.filter((species) => species.location === 'NE');
const animalsNW = data.species.filter((species) => species.location === 'NW');
const animalsSE = data.species.filter((species) => species.location === 'SE');
const animalsSW = data.species.filter((species) => species.location === 'SW');
// let array = []
// console.log(animalsNE.map((element) => ({ [element.name]: element.residents.map((element) => element.name) })));

const animalsPerLoc = () => ({
  NE: animalsNE.map((element) => element.name),
  NW: animalsNW.map((element) => element.name),
  SE: animalsSE.map((element) => element.name),
  SW: animalsSW.map((element) => element.name),
});

const animalsPerLocNames = () => ({
  NE: animalsNE.map((element) =>
    ({ [element.name]: element.residents
      .map((animal) => animal.name) })),
  NW: animalsNW.map((element) =>
    ({ [element.name]: element.residents
      .map((animal) => animal.name) })),
  SE: animalsSE.map((element) =>
    ({ [element.name]: element.residents
      .map((animal) => animal.name) })),
  SW: animalsSW.map((element) =>
    ({ [element.name]: element.residents
      .map((animal) => animal.name) })),
});
console.log(animalsPerLocNames());

function getAnimalMap(options) {
  if (!options) return animalsPerLoc();
  if (options.includeNames) return animalsPerLocNames();

}

const options = { includeNames: true };
console.log(getAnimalMap(options));
module.exports = getAnimalMap;
