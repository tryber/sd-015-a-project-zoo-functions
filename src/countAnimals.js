const data = require('../data/zoo_data');

const { species } = data;

function countAnimals({ specie = 0, sex = 0 } = 0) {
  if (specie === 0) {
    return species.reduce((res, spe) => {
      res[spe.name] = spe.residents.length;
      return res;
    }, {});
  }
  const findSpecie = species.find((spe) => spe.name === specie).residents;
  if (sex === 0) {
    return findSpecie.length;
  }
  return findSpecie.filter((spe) => spe.sex === sex).length;
}

module.exports = countAnimals;
