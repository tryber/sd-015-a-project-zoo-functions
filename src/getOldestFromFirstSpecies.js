const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const [animalId] = data.employees.find((el) => el.id === id).responsibleFor;
  const { residents } = data.species.find((el) => el.id === animalId);
  const [{ name, sex, age }] = residents.sort((a, b) => b.age - a.age);
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
