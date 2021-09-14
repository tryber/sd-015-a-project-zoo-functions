const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestSpecies({ responsibleFor }) {
  const { residents } = species.find(({ id }) => id === responsibleFor[0]);

  const oldestResident = residents.reduce(
    (older, resident) =>
      ((resident.age > older.age) ? resident : older),
    { age: 0 },
  );

  return Object.values(oldestResident);
}

function getOldestFromFirstSpecies(idGiven) {
  const employee = employees.find(({ id }) => id === idGiven);
  return getOldestSpecies(employee);
}

module.exports = getOldestFromFirstSpecies;
