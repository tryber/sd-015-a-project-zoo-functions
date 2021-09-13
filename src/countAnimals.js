const data = require('../data/zoo_data');

function countAllAnimals() {
  const { species } = data;

  const animalList = {};
  species.forEach(({ name, residents }) => {
    animalList[name] = residents.length;
  });

  return animalList;
}

function countBySpecie(specie) {
  const { species } = data;

  const { residents } = species.find(
    ({ name }) => name === specie,
  );
  return residents.length;
}

function countByGender(specie, gender) {
  const { species } = data;
  const { residents } = species.find(
    ({ name }) => name === specie,
  );
  const numOfGenderResidents = residents.filter(({ sex }) => sex === gender).length;
  return numOfGenderResidents;
}

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return countAllAnimals();
  }
  const { specie = false, gender = false } = animal;

  if (!gender) {
    return countBySpecie(specie);
  }

  return countByGender(specie, gender);
}

console.log(countAnimals());

module.exports = countAnimals;
