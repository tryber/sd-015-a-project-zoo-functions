const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  let { specie, sex } = '';
  if (animal) {
    ({ specie, sex } = animal);
  } else {
    return species.reduce((res, spe) => {
      res[spe.name] = spe.residents.length;
      return res;
    }, {});
  }
  let findAnimals;

  if (specie) findAnimals = species.find(({ name }) => name === specie);
  if (sex) {
    findAnimals = findAnimals.residents.filter(({ gen }) => gen === sex);
    return findAnimals.length;
  }

  return findAnimals.residents.length;
}

// console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
