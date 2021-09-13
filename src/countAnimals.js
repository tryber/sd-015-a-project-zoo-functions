const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (typeof animal === 'undefined') {
    const allAnimals = {};
    species.forEach((elem) => { allAnimals[elem.name] = elem.residents.length; });
    return allAnimals;
  }
  const { specie, gender } = animal;
  const anim = species.find((elem) => elem.name === specie).residents;
  const genCount = anim.reduce((acc, curr) => (curr.sex === gender ? acc + 1 : acc), 0);
  return gender === undefined ? anim.length : genCount;
};

module.exports = countAnimals;
