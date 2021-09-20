const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstAnimal = employees.find((employee) => employee.id === id).responsibleFor[0];
  const allAnimals = species.find((specie) => specie.id === firstAnimal).residents;
  const oldestAnimal = allAnimals.reduce((highestAge, animal) => {
    const oldest = highestAge.age > animal.age ? highestAge : animal;
    return oldest;
  }, 0);
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
