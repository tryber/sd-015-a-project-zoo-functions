const data = require('../data/zoo_data');

// consultado o repositorio de alex cubas
// https://github.com/tryber/sd-015-a-project-zoo-functions/pull/12/commits/52d0a899afe68fc53467a395e2dd8e45786bbeb7

function countAnimals(animal) {
  // seu código aqui
  const animalsName = {};

  if (!animal) {
    data.species.forEach((ele) => {
      animalsName[ele.name] = ele.residents.length;
    });
    return animalsName;
  }

  const { specie, gender } = animal;

  const Animals = data.species.find((e) => e.name === specie).residents;

  const residents = Animals.reduce((acc, el) => (el.sex === gender ? acc + 1 : acc), 0);

  return gender === undefined ? Animals.length : residents;
}

module.exports = countAnimals;
