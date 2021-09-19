const data = require('../data/zoo_data');

function listarAnimais(options, specie) {
  return specie.residents
    .filter((animal) => (options.sex && animal.sex === options.sex) || (!options.sex))
    .map((animal) => animal.name);
}

function getAnimalMap(options = { includeNames: false, sorted: false, sex: false }) {
  const result = data.species.reduce((obj, specie) => {
    if (options.includeNames) {
      const animalList = listarAnimais(options, specie);
      if (options.sorted) animalList.sort();
      obj[specie.location].push({ [specie.name]: animalList });
    } else {
      obj[specie.location].push(specie.name);
    }
    return obj;
  }, { NE: [], NW: [], SE: [], SW: [] });
  return result;
}

module.exports = getAnimalMap;
