const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal !== undefined) {
    const { specie, sex } = animal;
    const specieResidents = species.find((whichAnimal) =>
      whichAnimal.name === specie).residents;
    console.log(specieResidents);
    return sex === undefined
      ? specieResidents.length
      : specieResidents.filter((whatAnimals) => whatAnimals.sex === sex).length;
  }
  const result = {};
  species.forEach((key) => {
    result[key.name] = key.residents.length;
  });
  return result;
}

module.exports = countAnimals;
