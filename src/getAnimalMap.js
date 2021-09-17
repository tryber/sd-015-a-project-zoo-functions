const data = require('../data/zoo_data');

const map = {
  NE: data.species.filter((animal) => animal.location === 'NE').map((specie) => specie.name),
  NW: data.species.filter((animal) => animal.location === 'NW').map((specie) => specie.name),
  SE: data.species.filter((animal) => animal.location === 'SE').map((specie) => specie.name),
  SW: data.species.filter((animal) => animal.location === 'SW').map((specie) => specie.name),
};

const residentsSearch = (sorted, sex, name) => {
  const search = data.species.find((anim) => anim.name === name).residents;
  if (sorted && sex !== undefined) {
    return search.filter((resident) => resident.sex === sex)
      .map((specie) => specie.name).sort();
  }
  if (sorted) {
    return search.map((specie) => specie.name).sort();
  }
  if (sex !== undefined) {
    return search.filter((resident) => resident.sex === sex).map((specie) => specie.name);
  }
  return search.map((specie) => specie.name);
};

const getAnimalMapOptions = (sorted, sex) => {
  const names = Object.keys(map).reduce((acc, curr) => {
    acc[curr] = map[curr].map((name) => ({
      [name]: residentsSearch(sorted, sex, name),
    }));
    return acc;
  }, {});
  return names;
};

const getAnimalMap = (options) => {
  if (!options) {
  return map;
}
  const { includeNames, sorted, sex } = options;
  if (includeNames) return getAnimalMapOptions(sorted, sex);

  return map;
};

module.exports = getAnimalMap;
