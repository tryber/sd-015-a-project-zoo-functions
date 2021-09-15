const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (typeof animal === 'undefined') {
    const getAnimals = {};
    species.forEach((elem) => { getAnimals[elem.name] = elem.residents.length; });
    return getAnimals;
  }
  const { specie, sex } = animal;
  const animals = species.find((element) => element.name === specie).residents;
  const sexCount = animals.reduce((acc, curr) => (curr.sex === sex ? acc + 1 : acc), 0);
  return sex === undefined ? animals.length : sexCount;
};

module.exports = countAnimals;
