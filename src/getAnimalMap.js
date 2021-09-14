const data = require('../data/zoo_data');

function getAnimalMap(options) {
  const animalsNE = data.species.filter((species) => species.location === 'NE');
  const animalsNW = data.species.filter((species) => species.location === 'NW');
  const animalsSE = data.species.filter((species) => species.location === 'SE');
  const animalsSW = data.species.filter((species) => species.location === 'SW');

  if (!options) {
    return {
      NE: animalsNE.map((element) => element.name),
      NW: animalsNW.map((element) => element.name),
      SE: animalsSE.map((element) => element.name),
      SW: animalsSW.map((element) => element.name),
    };
  }
  // console.log(animalsNE.map((element) => element.name));
}

console.log(getAnimalMap());
module.exports = getAnimalMap;
