const data = require('../data/zoo_data');

const { species } = data;

function countAnimals({ specie, gender } = {}) {
  const obj = {};
  species.forEach((e) => { obj[e.name] = e.residents.length; });
  if (specie && gender) {
    return species
      .find((e) => e.name === specie).residents
      .filter((e) => e.sex === gender).length;
  }
  if (specie) return obj[specie];
  return obj;
}

module.exports = countAnimals;
