const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = employees.find((employee) => employee.id.includes(id));
  return getOldestSpecies(employee);
}

function getOldestSpecies({ responsibleFor }) {
  const { residents } = species.find((specie) => specie.id.includes(responsibleFor[0]));
  const oldestResident = oldestResidentFn(residents);
  return Object.values(oldestResident);
}

function oldestResidentFn(residents) {
  return residents.reduce(
    (older, resident) => ((resident.age > older.age) ? resident : older),
    { age: 0 }
  );
}

module.exports = getOldestFromFirstSpecies;
