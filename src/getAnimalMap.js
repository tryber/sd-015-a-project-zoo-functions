const data = require('../data/zoo_data');

const animalsNE = data.species.filter((species) => species.location === 'NE');
const animalsNW = data.species.filter((species) => species.location === 'NW');
const animalsSE = data.species.filter((species) => species.location === 'SE');
const animalsSW = data.species.filter((species) => species.location === 'SW');

const animalsNEloc = animalsNE
  .map((element) => ({ [element.name]: element.residents
    .map((animal) => animal.name) }));
const animalsNWloc = animalsNW
  .map((element) => ({ [element.name]: element.residents
    .map((animal) => animal.name) }));
const animalsSEloc = animalsSE
  .map((element) => ({ [element.name]: element.residents
    .map((animal) => animal.name) }));
const animalsSWloc = animalsSW
  .map((element) => ({ [element.name]: element.residents
    .map((animal) => animal.name) }));
// let array = []

const animalsNElocSort = animalsNE
  .map((element) => ({ [element.name]: element.residents
    .map((animal) => animal.name).sort() }));
const animalsNWlocSort = animalsNW
  .map((element) => ({ [element.name]: element.residents
    .map((animal) => animal.name).sort() }));
const animalsSElocSort = animalsSE
  .map((element) => ({ [element.name]: element.residents
    .map((animal) => animal.name).sort() }));
const animalsSWlocSort = animalsSW
  .map((element) => ({ [element.name]: element.residents
    .map((animal) => animal.name).sort() }));

// console.log(animalsNE.map((element) => ({ [element.name]: element.residents.map((element2) => element2.name).sort((a, b) => a > b) })));

const animalsPerLoc = () => ({
  NE: animalsNE.map((element) => element.name),
  NW: animalsNW.map((element) => element.name),
  SE: animalsSE.map((element) => element.name),
  SW: animalsSW.map((element) => element.name),
});

const animalsPerLocNames = () => ({
  NE: animalsNEloc,
  NW: animalsNWloc,
  SE: animalsSEloc,
  SW: animalsSWloc,
});
// console.log(animalsPerLocNames());

const animalsPerLocSorted = () => ({
  NE: animalsNElocSort,
  NW: animalsNWlocSort,
  SE: animalsSElocSort,
  SW: animalsSWlocSort,
});

function getAnimalMap(options) {
  if (!options) return animalsPerLoc();
  if (options.sorted) return animalsPerLocSorted();
  if (options.includeNames) return animalsPerLocNames();
}

const options = { includeNames: true, sorted: true };
console.log(getAnimalMap(options));
module.exports = getAnimalMap;
