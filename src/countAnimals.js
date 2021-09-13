const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (typeof animal === 'undefined') {
    const getAnimals = {};
    species.forEach((elem) => { getAnimals[elem.name] = elem.residents.length; });
    return getAnimals;
  }
  const { specie, gender } = animal;
  const animals = species.find((element) => element.name === specie).residents;
  const genderCount = animals.reduce((acc, curr) => (curr.sex === gender ? acc + 1 : acc), 0);
  return gender === undefined ? animals.length : genderCount;
};

module.exports = countAnimals;
