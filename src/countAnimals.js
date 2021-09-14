const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const numberOfAnimals = {};
    species.forEach((spe) => { numberOfAnimals[spe.name] = spe.residents.length; });
    return numberOfAnimals;
  }
  const { specie, gender } = animal;
  const animalsForSpecie = species.find((spe) => spe.name === specie).residents;
  const animalsOfGender = animalsForSpecie
    .reduce((acc, curr) => (curr.sex === gender ? acc + 1 : acc), 0);

  return !gender ? animalsForSpecie.length : animalsOfGender;
}

console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
