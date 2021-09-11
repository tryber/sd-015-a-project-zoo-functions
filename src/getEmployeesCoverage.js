const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function showAllEmployee() {
  return employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((e) => species.find((a) => a.id === e).name),
    locations: employee.responsibleFor.map((e) => species.find((a) => a.id === e).name).map((e) =>
      species.find((el) => el.name === e).location),
  }));
}

function lookEmployeeById(id) {
  const allIds = employees.map((elem) => elem.id);
  if (allIds.some((e) => e === id)) {
    return {
      id: employees.find((e) => e.id === id).id,
      fullName: `${employees.find((e) => e.id === id).firstName} ${employees.find((e) =>
        e.id === id).lastName}`,
      species: employees.find((e) => e.id === id).responsibleFor.map((e) =>
        species.find((a) => a.id === e).name),
      locations: employees.find((e) => e.id === id).responsibleFor.map((e) =>
        species.find((a) => a.id === e).name).map((el) =>
        species.find((e) => e.name === el).location),
    };
  }
  throw new Error('Informações inválidas');
}

function getEmployeeByLastName(name) {
  const allLastNames = employees.map((elem) => elem.lastName);
  if (allLastNames.some((e) => e === name)) {
    return {
      id: employees.find((e) => e.lastName === name).id,
      fullName: `${employees.find((e) =>
        e.lastName === name).firstName} ${employees.find((e) => e.lastName === name).lastName}`,
      species: employees.find((e) => e.lastName === name).responsibleFor.map((e) =>
        species.find((el) => el.id === e).name),
      locations: employees.find((e) => e.lastName === name).responsibleFor.map((e) =>
        species.find((el) => el.id === e).name).map((e) =>
        species.find((el) => el.name === e).location),
    };
  }
  return false;
}

function getEmployeesByName(name) {
  const allFirstNames = employees.map((elem) => elem.firstName);
  if (allFirstNames.some((e) => e === name)) {
    return {
      id: employees.find((e) => e.firstName === name).id,
      fullName: `${employees.find((e) =>
        e.firstName === name).firstName} ${employees.find((e) => e.firstName === name).lastName}`,
      species: employees.find((e) => e.firstName === name).responsibleFor.map((e) =>
        species.find((el) => el.id === e).name),
      locations: employees.find((e) => e.firstName === name).responsibleFor.map((e) =>
        species.find((el) => el.id === e).name).map((e) =>
        species.find((el) => el.name === e).location),
    };
  }
  return false;
}

function getEmployeesCoverage({ name = false, id = false } = {}) {
  if (!name && !id) return showAllEmployee();
  if (id) return lookEmployeeById(id);
  if (!getEmployeesByName(name)) {
    return getEmployeeByLastName(name);
  }
  return getEmployeesByName(name);
}

console.log(lookEmployeeById('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getEmployeesCoverage;
