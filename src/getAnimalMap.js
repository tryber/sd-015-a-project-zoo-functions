const data = require('../data/zoo_data');

function getAnimalId(opt, object) {
  const animalNames = data.species.reduce((acc, spc) => {
    const residents = opt.sex ? spc.residents.filter((res) => res.sex === opt.sex) : spc.residents;
    const names = residents.map((res) => res.name);
    acc[spc.location].push({ [spc.name]: opt.sorted ? names.sort() : names });
    return acc;
  }, object);
  return animalNames;
}

function getAnimalMap(options) {
  // seu código aqui
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  if (!options || Object.values(options)[0] === 'female') {
    return data.species.reduce((acc, specie) => {
      acc[specie.location] = [...acc[specie.location], specie.name];
      return acc;
    }, obj);
  }
  if (options.includeNames) return getAnimalId(options, obj);
}

module.exports = getAnimalMap;
