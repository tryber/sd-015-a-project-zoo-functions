const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const animals = {};
  if (!animal) {
    data.species.forEach(({ name, residents }) => {
      animals[name] = residents.length;
    });
    return animals;
  }
  const animalSelected = data.species.find((spec) => spec.name === animal.specie);

  if (animal.gender) {
    const sexSelected = animalSelected.residents
      .filter((resident) => resident.sex === animal.gender);
    return sexSelected.length;
  }
  return animalSelected.residents.length;
}

module.exports = countAnimals;
