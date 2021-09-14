const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (typeof animal === 'undefined') {
    const countedAnimals = {};
    species.forEach((specie) => { countedAnimals[specie.name] = specie.residents.length; });

    return countedAnimals;
  }
  const { specie, sex } = animal;
  const animals = species.find((spe) => spe.name === specie).residents;
  const countinAnimals = animals.reduce((acc, curr) => (curr.sex === sex ? acc + 1 : acc), 0);

  return sex === undefined ? animals.length : countinAnimals;
}

module.exports = countAnimals;
