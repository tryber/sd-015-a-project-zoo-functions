const data = require('../data/zoo_data');

const allAnimals = {
  'lions': 4,
  'tigers': 2,
  'bears': 3,
  'penguins': 4,
  'otters': 4,
  'frogs': 2,
  'snakes': 2,
  'elephants': 4,
  'giraffes': 6,
};

function countAnimals(animal) {
  if (!animal) {
    return allAnimals;
  }

  const filteredAnimal = data.species.find((dataAnimal) => dataAnimal.name === animal.specie);
  if (!animal.sex) {
    return filteredAnimal.residents.length;
  }
  const sexFilteredResidents = filteredAnimal.residents.filter((resident) => resident.sex === animal.sex);
  return sexFilteredResidents.length;
}

module.exports = countAnimals;
