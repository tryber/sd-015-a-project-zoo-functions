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
  .map((elementNE) => ({ [elementNE.name]: elementNE.residents
    .map((animal) => animal.name)
    .sort() }));
const animalsNWlocSort = animalsNW
  .map((elementNW) => ({ [elementNW.name]: elementNW.residents
    .map((animal) => animal.name)
    .sort() }));
const animalsSElocSort = animalsSE
  .map((elementSE) => ({ [elementSE.name]: elementSE.residents
    .map((animal) => animal.name)
    .sort() }));
const animalsSWlocSort = animalsSW
  .map((elementSW) => ({ [elementSW.name]: elementSW.residents
    .map((animal) => animal.name)
    .sort() }));

// console.log(animalsNE.map((element) => ({ [element.name]: element.residents.map((element2) => element2.name).sort((a, b) => a > b) })));

const animalsLoc = () => ({
  NE: animalsNE.map((element) => element.name),
  NW: animalsNW.map((element) => element.name),
  SE: animalsSE.map((element) => element.name),
  SW: animalsSW.map((element) => element.name),
});

const animalsNames = () => ({
  NE: animalsNEloc,
  NW: animalsNWloc,
  SE: animalsSEloc,
  SW: animalsSWloc,
});
// console.log(animalsPerLocNames());

const animalsSort = () => ({
  NE: animalsNElocSort,
  NW: animalsNWlocSort,
  SE: animalsSElocSort,
  SW: animalsSWlocSort,
});

const animalsSex = (sex) => {
  const animalsNElocSex = animalsNE.map((element) => ({ [element.name]: element.residents
    .filter((animalDoc) => animalDoc.sex === sex).map((animal) => animal.name) }));
  const animalsNWlocSex = animalsNW.map((element) => ({ [element.name]: element.residents
    .filter((animalDoc) => animalDoc.sex === sex).map((animal) => animal.name) }));
  const animalsSElocSex = animalsSE.map((element) => ({ [element.name]: element.residents
    .filter((animalDoc) => animalDoc.sex === sex).map((animal) => animal.name) }));
  const animalsSWlocSex = animalsSW.map((element) => ({ [element.name]: element.residents
    .filter((animalDoc) => animalDoc.sex === sex).map((animal) => animal.name) }));

  return {
    NE: animalsNElocSex,
    NW: animalsNWlocSex,
    SE: animalsSElocSex,
    SW: animalsSWlocSex,
  };
};

const aniamalsSexSort = (sex) => {
  const animalsNElocSexSort = animalsNE.map((element) => ({ [element.name]: element.residents
    .filter((animalDoc) => animalDoc.sex === sex).map((animal) => animal.name).sort() }));
  const animalsNWlocSexSort = animalsNW.map((element) => ({ [element.name]: element.residents
    .filter((animalDoc) => animalDoc.sex === sex).map((animal) => animal.name).sort() }));
  const animalsSElocSexSort = animalsSE.map((element) => ({ [element.name]: element.residents
    .filter((animalDoc) => animalDoc.sex === sex).map((animal) => animal.name).sort() }));
  const animalsSWlocSexSort = animalsSW.map((element) => ({ [element.name]: element.residents
    .filter((animalDoc) => animalDoc.sex === sex).map((animal) => animal.name).sort() }));

  return {
    NE: animalsNElocSexSort,
    NW: animalsNWlocSexSort,
    SE: animalsSElocSexSort,
    SW: animalsSWlocSexSort,
  };
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) return animalsLoc();

  const test1 = (opt) => {
    if (opt.includeNames && !opt.sorted) {
      return !opt.sex ? animalsNames() : animalsSex(opt.sex);
    };
  };

  const test2 = (opt) => {
    if (opt.includeNames && opt.sorted) {
      return !opt.sex ? animalsSort() : aniamalsSexSort(opt.sex);
    }
  };

  return test1(options) ? test1(options) : test2(options);
}

const options = { includeNames: true};
console.log(getAnimalMap()); //zena
module.exports = getAnimalMap;
