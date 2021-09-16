const data = require('../data/zoo_data');

const { species } = data;

const fullMap = species
  .reduce((accumulator, specie) => ({ ...accumulator,
    [specie.location]: [] }),
  {});

const residentsObj = species
  .reduce((accumulator, specie) => ({ ...accumulator,
    [specie.name]: specie.residents
      .reduce((acc, { name }) => ([...acc, name]), []) }),
  {});
const mapFilter = (areas) => {
/*  for (const area of areas) {
    fullMap[area] = species.filter(({ location }) => location === area);
  }
  areas.filter((area) => {
    species.filter(({ location, name }) => {
      if (location === area) {
        return fullMap[area].push(name);
      }
      return fullMap;
    });
    return fullMap;
  }); */

  areas
    .filter((area) => species
      .filter(({ location, name }) => ((location === area) ? fullMap[area]
        .push(name) : fullMap)));
  return fullMap;
};

const speciesByName = () => residentsObj;
const mapByName = () => {
  const animalNames = [];
  species
    .filter(({ residents }) => residents
      .filter(({ name }) => animalNames
        .push(name)));
  return animalNames;
};

function animalMap() {
  const fullMapAr = Object.keys(fullMap);
  const NEAnimals = mapFilter(fullMapAr);
  return NEAnimals;
}

function mapSort(options) {
  if (options.includeNames) return mapByName();
  return options;
}

function getAnimalMap(options) {
  // seu código aqui
  if (!options) return animalMap();
  return mapSort(options);
  // mapByNameFn;
  // mapBySexFn;
}
console.log(speciesByName());
console.log(getAnimalMap());
module.exports = getAnimalMap;
