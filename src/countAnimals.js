const data = require('../data/zoo_data');

const countAnimalsObj = (acc, curr) => Object.assign(acc, { [curr.name]: curr.residents.length });

function countAnimals(animal) {
  // seu código aqui
  const { species } = data;
  if (!animal) {
    return species.reduce(countAnimalsObj, {});
  }
  const selectedSpecie = species.find((beast) => beast.name === animal.specie);
  if (animal.specie && animal.gender) {
    const selectedGenders = selectedSpecie.residents.filter((beast) => beast.sex === animal.gender);
    return selectedGenders.length;
  }
  return selectedSpecie.residents.length;
}

module.exports = countAnimals;
