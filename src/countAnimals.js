const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (typeof animal === 'undefined') {
    const countedAnimals = {};
    species.forEach((specie) => { countedAnimals[specie.name] = specie.residents.length; });
    console.log(countedAnimals);
    return countedAnimals;
  }
  const { specie, gender } = animal;
  const animals = species.find((spe) => spe.name === specie).residents;
  const countinAnimals = animals.reduce((acc, curr) => (curr.sex === gender ? acc + 1 : acc), 0);

  return gender === undefined ? animals.length : countinAnimals;
}

module.exports = countAnimals;
