const data = require('../data/zoo_data');

const { species } = data;

const Obj = (acc, curr) => Object.assign(acc, { [curr.name]: curr.residents.length });

function countAnimals(animal) {
  if (!animal) {
    return species.reduce(Obj, {});
  }

  const specie = species.find((anm) => anm.name === animal.specie);

  if (animal.specie && animal.gender) {
    const specAndGender = specie.residents.filter((anm) => anm.sex === animal.gender);
    return specAndGender.length;
  }
  return specie.residents.length;
}

module.exports = countAnimals;
