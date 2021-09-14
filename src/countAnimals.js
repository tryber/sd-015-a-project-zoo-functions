const data = require('../data/zoo_data');

function filterAttribute(animal, attribute, string) {
  return animal[attribute].search(string) === 0;
}

function countBySex(animal, gender) {
  let animalResidents = animal.residents;
  if (gender) {
    animalResidents = animalResidents.filter((resident) => (
      filterAttribute(resident, 'sex', gender)
    ));
  }
  return animalResidents.length;
}

function countAnimals({ specie, gender } = { specie: undefined, gender: undefined }) {
  let animals = data.species;
  if (specie) {
    animals = data.species.filter((animalSpecie) => (
      filterAttribute(animalSpecie, 'name', specie)
    ));
    return countBySex(animals[0], gender);
  }
  const result = {};
  animals.forEach((animal) => {
    result[animal.name] = countBySex(animal, gender);
  });
  return result;
}

module.exports = countAnimals;
