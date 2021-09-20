const data = require('../data/zoo_data');

const getAnimalList = (id, name) => {
  const employeeArray = data.employees.find((employee) => id === employee.id);
  const animalList = employeeArray.responsibleFor.map((animal) =>
    data.species.find((animalId) => animalId.id === animal));
  if (name === 'name') {
    return animalList.map((value) => value.name);
  }
  return animalList.map((area) => area.location);
};

const createObject = () => {
  const result = data.employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getAnimalList(employee.id, 'name'),
    locations: getAnimalList(employee.id, 'location'),
  }));
  return result;
};

function getEmployeesCoverage(employee) {
  // seu código aqui
  const employeesObject = createObject();
  if (employee === undefined) {
    return employeesObject;
  }
  const employeeInfo = employeesObject.find((info) => info.id.includes(employee.id)
  || info.fullName.includes(employee.name) || info.fullName.includes(employee.name));

  if (employeeInfo === undefined) {
    throw new Error('Informações inválidas');
  }
  return employeeInfo;
}

module.exports = getEmployeesCoverage;
