const data = require('../data/zoo_data');

function getEmployeesCoverage(employee) {
  const findEmployee = ({ name, id }) => data.employees.find((find) =>
    find.firstName === name || find.lastName === name || find.id === id);
  const findSpecies = find => data.species.filter((filter) => find.responsibleFor
    .includes(filter.id));
  const employeeCover = data.employees.map((entry) => ({
    id: entry.id,
    fullName: `${entry.firstName} ${entry.lastName}`,
    species: findSpecies(entry).map((specie) => specie.name),
    locations: findSpecies(entry).map((specie) => specie.location),
  }))
  if (employee === undefined) {
    return employeeCover;
  };
  const employeeName = findEmployee(employee);
  if (employeeName === undefined) throw new Error('Informações inválidas');
  return employeeCover.find((worker) => worker.id === employeeName.id);
}

module.exports = getEmployeesCoverage;
