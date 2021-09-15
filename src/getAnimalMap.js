const data = require('../data/zoo_data');

const { species } = data;

function getAnimalNames(opt, obj) {
  const animalNames = species.reduce((acc, spc) => {
    const residents = opt.sex ? spc.residents.filter((res) => res.sex === opt.sex) : spc.residents;
    const names = residents.map((res) => res.name)
    acc[spc.location].push({ [spc.name]: opt.sorted ? names.sort() : names });
    return acc;
  }, obj);
  return animalNames;
}

function getAnimalMap(options) {
  // seu código aqui
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  if (!options || Object.values(options)[0] === 'female') {
    return species.reduce((acc, specie) => {
      acc[specie.location] = [...acc[specie.location], specie.name];
      return acc;
    }, obj);
  }
  if (options.includeNames) return getAnimalNames(options, obj);
}

module.exports = getAnimalMap;

console.log(getAnimalMap({ sex: 'male', sorted: true }));
