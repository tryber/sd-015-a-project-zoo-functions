const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const speciesLocalization = species.map((specie) => [specie.location, specie.name]);

function speciesNames() {
  return species.map((specie) => ({
    [specie.name]: specie.residents.map((animal) => animal.name),
  }));
}

function speciesNamesInOrder(arrayReference) {
  return arrayReference.map((animal) => ({
    [Object.keys(animal)[0]]: Object.values(animal)[0].sort(),
  }));
}

function speciesSex(sex) {
  return species.map((specie) => ({
    [specie.name]: specie.residents.map((resident) => {
      if (resident.sex === sex) {
        return resident.name;
      }
      return '';
    }).filter((name) => name !== ''),
  }));
}

function defaultResult() {
  return speciesLocalization.reduce((acc, curr) => {
    const [local, animal] = curr;
    acc[local].push(animal);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}

function animalsNamesAndLocal(arrayReference) {
  return arrayReference.reduce((acc, curr, index) => {
    acc[speciesLocalization[index][0]].push(curr);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}

const results = {
  [['includeNames', 'true']]:
  animalsNamesAndLocal(speciesNames()),
  [[['includeNames', 'true'], ['sorted', 'true']]]:
  animalsNamesAndLocal(speciesNamesInOrder(speciesNames())),
  [[['includeNames', 'true'], ['sex', 'male']]]:
  animalsNamesAndLocal(speciesSex('male')),
  [[['includeNames', 'true'], ['sex', 'female']]]:
  animalsNamesAndLocal(speciesSex('female')),
  [[['includeNames', 'true'], ['sex', 'male'], ['sorted', 'true']]]:
  animalsNamesAndLocal(speciesNamesInOrder(speciesSex('male'))),
  [[['includeNames', 'true'], ['sex', 'female'], ['sorted', 'true']]]:
  animalsNamesAndLocal(speciesNamesInOrder(speciesSex('female'))),
};

function getAnimalMap(options) {
  if (options === undefined) return defaultResult();

  if (results[Object.entries(options)] === undefined) return defaultResult();

  return results[Object.entries(options)];
}

module.exports = getAnimalMap;
