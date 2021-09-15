const data = require('../data/zoo_data');

const { employees } = data;
const idList = employees.map((employee) => employee.id);
const firstNames = employees.map((employee) => employee.firstName);
const lastNames = employees.map((employee) => employee.lastName);

// Function to create the output like {id, fullName, species, locations}
function createOutput(info) {
  const { id } = info;
  const fullName = `${info.firstName} ${info.lastName}`;
  const Ids = info.responsibleFor;
  const species = data.species.filter((sp) => Ids.includes(sp.id)).map((inf) => inf.name);
  const locations = data.species.filter((sp) => Ids.includes(sp.id)).map((inf) => inf.location);
  return { id, fullName, species, locations };
}

// Function to return employee info formated correctly according to the id
function getEmployeeById(id) {
  if (idList.includes(id)) {
    const employeeFound = employees.find((employee) => employee.id === id);
    return createOutput(employeeFound);
  }
  throw new Error('Informações inválidas');
}

// Function to return employee info formated correctly according to the id
function getEmployeeByName(name) {
  if (firstNames.includes(name) || lastNames.includes(name)) {
    const employeeFound = employees.find((emp) => emp.firstName === name || emp.lastName === name);
    return createOutput(employeeFound);
  }
  throw new Error('Informações inválidas');
}

// Function to map all employees formated correctly
function getAllEmployees() {
  return employees.map((employee) => createOutput(employee));
}

// Main function to call one of the other functions above acording to each condition
function getEmployeesCoverage({ name = false, id = false } = {}) {
  if (!name && !id) return getAllEmployees();
  // if (firstNames.includes(name) || lastNames.includes(name) || idList.includes(id)) {
  if (name) return getEmployeeByName(name);
  if (id) return getEmployeeById(id);
}

module.exports = getEmployeesCoverage;
