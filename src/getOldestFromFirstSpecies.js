const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const filterPersonById = employees.find((person) => person.id === id);

  const filterAnimalById = species.find(
    (animal) => animal.id === filterPersonById.responsibleFor[0],
  ).residents;
  const oldestAnimal = filterAnimalById.sort((a, b) => b.age - a.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
