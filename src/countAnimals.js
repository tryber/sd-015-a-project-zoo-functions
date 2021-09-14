const data = require('../data/zoo_data');

const { species } = data;

function countAnimals({ specie = 0, sex = 0 } = 0) {
  if (specie === 0) {
    return species.reduce((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return acc;
    }, {});
  }
  const findSpecie = species.find((elm) => elm.name === specie).residents;
  const slctdAnimals = sex === 0 ? findSpecie : findSpecie.filter((elm) => elm.sex === sex);
  return slctdAnimals.length;
}

module.exports = countAnimals;
