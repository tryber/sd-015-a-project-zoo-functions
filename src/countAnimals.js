const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  let { specie, gender } = '';
  if (animal) {
    ({ specie, gender } = animal);
  } else {
    return species.reduce((acc, { name, residents }) => ({ ...acc, [name]: residents.length }), {});
    // https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable
  }
  let filteredAnimals;

  if (specie) filteredAnimals = species.find(({ name }) => name === specie);
  if (gender) {
    filteredAnimals = filteredAnimals.residents.filter(({ sex }) => sex === gender);
    return filteredAnimals.length;
  }

  return filteredAnimals.residents.length;
};

module.exports = countAnimals;
