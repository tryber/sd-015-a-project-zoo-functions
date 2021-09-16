const data = require('../data/zoo_data');

const speciesNE = data.species.filter((specie) => specie.location === 'NE');
const speciesNW = data.species.filter((specie) => specie.location === 'NW');
const speciesSE = data.species.filter((specie) => specie.location === 'SE');
const speciesSW = data.species.filter((specie) => specie.location === 'SW');

const speciesNEloc = speciesNE
  .map((specie) => ({ [specie.name]: specie.residents
    .map((animal) => animal.name) }));
const speciesNWloc = speciesNW
  .map((specie) => ({ [specie.name]: specie.residents
    .map((animal) => animal.name) }));
const speciesSEloc = speciesSE
  .map((specie) => ({ [specie.name]: specie.residents
    .map((animal) => animal.name) }));
const speciesSWloc = speciesSW
  .map((specie) => ({ [specie.name]: specie.residents
    .map((animal) => animal.name) }));

const speciesNElocSort = speciesNEloc.sort();
const speciesNWlocSort = speciesNWloc.sort();
const speciesSElocSort = speciesSEloc.sort();
const speciesSWlocSort = speciesSWloc.sort();

const speciesLoc = () => ({
  NE: speciesNE.map((specie) => specie.name),
  NW: speciesNW.map((specie) => specie.name),
  SE: speciesSE.map((specie) => specie.name),
  SW: speciesSW.map((specie) => specie.name),
});

const speciesNames = () => ({
  NE: speciesNEloc,
  NW: speciesNWloc,
  SE: speciesSEloc,
  SW: speciesSWloc,
});

const speciesSort = () => ({
  NE: speciesNElocSort,
  NW: speciesNWlocSort,
  SE: speciesSElocSort,
  SW: speciesSWlocSort,
});

const speciesSex = (sex) => {
  const speciesNElocSex = speciesNE.map((specie) => ({ [specie.name]: specie.residents
    .filter((animal) => animal.sex === sex).map((animal) => animal.name) }));
  const speciesNWlocSex = speciesNW.map((specie) => ({ [specie.name]: specie.residents
    .filter((animal) => animal.sex === sex).map((animal) => animal.name) }));
  const speciesSElocSex = speciesSE.map((specie) => ({ [specie.name]: specie.residents
    .filter((animal) => animal.sex === sex).map((animal) => animal.name) }));
  const speciesSWlocSex = speciesSW.map((specie) => ({ [specie.name]: specie.residents
    .filter((animal) => animal.sex === sex).map((animal) => animal.name) }));

  return {
    NE: speciesNElocSex,
    NW: speciesNWlocSex,
    SE: speciesSElocSex,
    SW: speciesSWlocSex,
  };
};

const aniamalsSexSort = (sex) => {
  const speciesNElocSexSort = speciesNE.map((specie) => ({ [specie.name]: specie.residents
    .filter((animal) => animal.sex === sex).map((animal) => animal.name).sort() }));
  const speciesNWlocSexSort = speciesNW.map((specie) => ({ [specie.name]: specie.residents
    .filter((animal) => animal.sex === sex).map((animal) => animal.name).sort() }));
  const speciesSElocSexSort = speciesSE.map((specie) => ({ [specie.name]: specie.residents
    .filter((animal) => animal.sex === sex).map((animal) => animal.name).sort() }));
  const speciesSWlocSexSort = speciesSW.map((specie) => ({ [specie.name]: specie.residents
    .filter((animal) => animal.sex === sex).map((animal) => animal.name).sort() }));

  return {
    NE: speciesNElocSexSort,
    NW: speciesNWlocSexSort,
    SE: speciesSElocSexSort,
    SW: speciesSWlocSexSort,
  };
};

const queryName = (opt) => {
  if (opt.includeNames && !opt.sorted) return !opt.sex ? speciesNames() : speciesSex(opt.sex);
};

const querySort = (opt) => {
  if (opt.includeNames && opt.sorted) return !opt.sex ? speciesSort() : aniamalsSexSort(opt.sex);
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) return speciesLoc();

  return queryName(options) ? queryName(options) : querySort(options);
}

module.exports = getAnimalMap;
