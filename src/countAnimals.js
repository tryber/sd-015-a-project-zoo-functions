const data = require('../data/zoo_data');

function countAnimals(specie) {
  const numberAnimals = {};
  if (specie === undefined) {
    data.species.forEach((animal) => {
      numberAnimals[animal.name] = animal.residents.length;
    });
    return numberAnimals;
  }

  const animalChoice = data.species.find((animal) => animal.name === specie.specie);

  if (specie.sex !== undefined) {
    const genderAnimalChoice = animalChoice.residents
      .filter((animal) => animal.sex === specie.sex);
    return genderAnimalChoice.length;
  }

  return animalChoice.residents.length;
}

module.exports = countAnimals;
