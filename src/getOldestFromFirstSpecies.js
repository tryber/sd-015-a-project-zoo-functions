const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((person) => person.id === id).responsibleFor[0];
  const animals = data.species.find((animal) => animal.id === employee).residents;
  const oldest = animals.reduce((older, animal) => (older.age > animal.age ? older : animal));
  return Object.values(oldest);
}

module.exports = getOldestFromFirstSpecies;
