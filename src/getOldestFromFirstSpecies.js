const data = require('../data/zoo_data');

const { employees, species } = data;

const getOlder = (animalId) => {
  const animal = species.find((e) => e.id === animalId);
  const { residents } = animal;
  const olderAge = Math.max(...residents.map((e) => e.age));
  const olderAnimal = residents.find((e) => e.age === olderAge);
  const { name, sex, age } = olderAnimal;
  return [name, sex, age];
};

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((e) => e.id === id);
  const oldSpecie = getOlder(employee.responsibleFor[0]);
  return oldSpecie;
}

module.exports = getOldestFromFirstSpecies;
