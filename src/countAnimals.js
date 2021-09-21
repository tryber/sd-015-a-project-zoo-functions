const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  const animals = {};
  if (!animal) {
    species.forEach(({ name, residents }) => {
      animals[name] = residents.length;
    });
    return animals;
  }
  const animalSelected = species.find((spec) => spec.name === animal.specie);

  if (animal.gender) {
    const sexSelected = animalSelected.residents
      .filter((resident) => resident.sex === animal.gender);
    return sexSelected.length;
  }
  return animalSelected.residents.length;
}

module.exports = countAnimals;
