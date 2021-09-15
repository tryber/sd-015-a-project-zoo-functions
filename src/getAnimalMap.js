const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animalsMap = {
  NE: species.filter((animal) => animal.location === 'NE').map((specie) => specie.name),
  NW: species.filter((animal) => animal.location === 'NW').map((specie) => specie.name),
  SE: species.filter((animal) => animal.location === 'SE').map((specie) => specie.name),
  SW: species.filter((animal) => animal.location === 'SW').map((specie) => specie.name),
};

const residentsSearch = (sorted, sex, elem) => {
  const search = species.find((animal) => animal.name === elem).residents;
  if (sorted !== undefined && sex !== undefined) {
    return search.filter((resident) =>
      resident.sex === sex).map((specie) => specie.name).sort();
  }
  if (sorted) {
    return search.map((specie) => specie.name).sort();
  }
  if (sex !== undefined) {
    return search.filter((resident) => resident.sex === sex).map((specie) => specie.name);
  }
  return search.map((specie) => specie.name);
};

const getAnimalMapWithOptions = (sorted, sex) => {
  const animalNames = Object.keys(animalsMap).reduce((acc, curr) => {
    acc[curr] = animalsMap[curr].map((elem) => ({
      [elem]: residentsSearch(sorted, sex, elem),
    }));
    return acc;
  }, {});
  return animalNames;
};

const getAnimalMap = (options) => {
  if (typeof options === 'undefined') return animalsMap;

  const { includeNames, sorted, sex } = options;
  if (includeNames) return getAnimalMapWithOptions(sorted, sex);

  return animalsMap;
};

module.exports = getAnimalMap;
