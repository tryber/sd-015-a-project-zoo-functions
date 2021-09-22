const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const fistAnimal = () =>
    employees.find((element) => element.id === id).responsibleFor[0];

  const oldestAnimal = () =>
    species
      .find((element) => element.id === fistAnimal())
      .residents.reduce((acc, curr) => {
        if (acc.age < curr.age) return curr;
        return acc;
      });

  return Object.values(oldestAnimal());
}

module.exports = getOldestFromFirstSpecies;
