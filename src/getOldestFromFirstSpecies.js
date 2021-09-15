const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  let bigger = 0;
  const firstAnimal = data.employees.find((employee) => employee.id === id)
    .responsibleFor[0];

  data.species.find((animal) => animal.id === firstAnimal)
    .residents.forEach((resident) => {
      if (resident.age > bigger) {
        bigger = resident.age;
      }
    });

  const biggerAnimal = data.species.find((animal) => animal.id === firstAnimal)
    .residents.find((biggerAge) => biggerAge.age === bigger);

  return [biggerAnimal.name, biggerAnimal.sex, biggerAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
