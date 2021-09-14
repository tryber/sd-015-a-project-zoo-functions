const data = require('../data/zoo_data');

function paramCheck(param) {
  const firstNamesOfEmployees = data.employees.map((employee) => employee.firstName);
  const lastNamesOfEmployees = data.employees.map((employee) => employee.lastName);
  const employeesIds = data.employees.map((employee) => employee.id);
  if (firstNamesOfEmployees.some((firstName) => firstName === param)) {
    return 'firstName';
  }
  if (lastNamesOfEmployees.some((lastName) => lastName === param)) {
    return 'lastName';
  }
  if (employeesIds.some((id) => id === param)) {
    return 'id';
  }
  return undefined;
}

function setLocationToObject(speciesManaged) {
  const locations = [];
  const animalsManaged = [];
  speciesManaged.forEach((specieManaged) => {
    animalsManaged.push(data.species.find((specie) => specie.name === specieManaged));
  });
  animalsManaged.forEach((animalManaged) => {
    locations.push(animalManaged.location);
  });
  return locations;
}

function employeeObjectArray() {
  const { employees } = data;
  const array = [];
  let nameOfSpecies = [];
  employees.forEach((employee) => {
    employee.responsibleFor.forEach((specieManaged) => {
      data.species.filter((speci) => speci.id === specieManaged).forEach((nameSpecieManagedBy) => {
        nameOfSpecies.push(nameSpecieManagedBy.name);
      });
    });
    array.push({
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: nameOfSpecies,
      locations: setLocationToObject(nameOfSpecies),
    });
    nameOfSpecies = [];
  });
  return array;
}

function selectEmployeeByName(name) {
  const totalObject = employeeObjectArray();
  return totalObject.find((employeeObject) => employeeObject.fullName.includes(name));
}

function selectEmployeeById(id) {
  const totalObject = employeeObjectArray();
  return totalObject.find((employeeObject) => employeeObject.id === id);
}

function getEmployeesCoverage(object) {
  if (object === undefined) {
    return employeeObjectArray();
  }
  const validParamCheck = paramCheck(Object.values(object)[0]);
  if (validParamCheck === undefined) {
    throw new Error('Informações inválidas');
  }
  if (validParamCheck === 'firstName' || validParamCheck === 'lastName') {
    return selectEmployeeByName(Object.values(object)[0]);
  }
  return selectEmployeeById(Object.values(object)[0]);
}

console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;
