const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  let { specie, gender } = '';
  if (animal) {
    ({ specie, gender } = animal);
  } else {
    return species.reduce((res, cur) => {
      res[cur.name] = cur.residents.length;
      return res;
    }, {});
  }
  let findAnimals;

  if (specie) findAnimals = species.find(({ name }) => name === specie);
  if (gender) {
    findAnimals = findAnimals.residents.filter(({ sex }) => sex === gender);
    return findAnimals.length;
  }

  return findAnimals.residents.length;
}

// console.log(countAnimals({ specie: 'bears', gender: 'female' }));

module.exports = countAnimals;
