const data = require('../data/zoo_data');

const getSpecies = (employeeId, animalNameorLoc) => {
  const employee = data.employees.find((value) => employeeId === value.id); // recebe o funcionario cujo id é o mesmo passado pelo parametro
  const animal = employee.responsibleFor.map((value) =>
    data.species.find((animalId) => animalId.id === value)); // recebe array com os objetos dos animais pelos quais é responsavel
  if (animalNameorLoc === 'name') { // caso for passado o paramentro 'name' irá retornar array com nomes dos animais
    return animal.map((value) => value.name);
  }
  return animal.map((value) => value.location); // caso não entre no if, irá retornar array com localizações dos animais
};

const getEmployees = () => {
  const objEmployees = data.employees.map((value) => ({
    id: value.id,
    fullName: `${value.firstName} ${value.lastName}`,
    species: getSpecies(value.id, 'name'),
    locations: getSpecies(value.id, 'location'),
  }));
  return objEmployees;
};

function getEmployeesCoverage(employee) {
  const employeesInfo = getEmployees();
  if (!employee) {
    return employeesInfo;
  }
  const employeeData = employeesInfo.find((value) => value.id.includes(employee.id)
  || value.fullName.includes(employee.name) || value.fullName.includes(employee.name));

  if (!employeeData) {
    throw new Error('Informações inválidas');
  }
  return employeeData;
}

module.exports = getEmployeesCoverage;
