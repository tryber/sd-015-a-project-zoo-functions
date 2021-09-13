const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const speciesMap = {
  NE: species.filter((anim) => anim.location === 'NE').map((specie) => specie.name),
  NW: species.filter((anim) => anim.location === 'NW').map((specie) => specie.name),
  SE: species.filter((anim) => anim.location === 'SE').map((specie) => specie.name),
  SW: species.filter((anim) => anim.location === 'SW').map((specie) => specie.name),
};

const residentsSearch = (sorted, sex, elem) => {
  const basicSearch = species.find((anim) => anim.name === elem).residents;
  if (sorted && sex !== undefined) {
    return basicSearch.filter((resident) => resident.sex === sex)
      .map((specie) => specie.name).sort();
  }
  if (sorted) {
    return basicSearch.map((specie) => specie.name).sort();
  }
  if (sex !== undefined) {
    return basicSearch.filter((resident) => resident.sex === sex).map((specie) => specie.name);
  }
  return basicSearch.map((specie) => specie.name);
};

const getAnimalMapOptions = (sorted, sex) => {
  const names = Object.keys(speciesMap).reduce((acc, curr) => {
    acc[curr] = speciesMap[curr].map((elem) => ({
      [elem]: residentsSearch(sorted, sex, elem),
    }));
    return acc;
  }, {});
  return names;
};

const getAnimalMap = (options) => {
  if (typeof options === 'undefined') return speciesMap;

  const { includeNames, sorted, sex } = options;
  if (includeNames) return getAnimalMapOptions(sorted, sex);

  return speciesMap;
};

module.exports = getAnimalMap;
