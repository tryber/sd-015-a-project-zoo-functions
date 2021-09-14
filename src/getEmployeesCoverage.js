const data = require('../data/zoo_data');

function getLocations(worker) {
  const anmlArr = worker.responsibleFor;
  return anmlArr.map((animal) => data.species.find((species) => species.id === animal).location);
}

function getCompleteCoverage() {
  const result = [];
  data.employees.forEach((worker) => {
    const resp = worker.responsibleFor;
    const employeeCoverage = {
      id: worker.id,
      fullName: `${worker.firstName} ${worker.lastName}`,
      species: resp.map((animal) => data.species.find((species) => species.id === animal).name),
      locations: getLocations(worker),
    };
    result.push(employeeCoverage);
  });
  return result;
}

function findEmployee(employee) {
  if (typeof employee.name !== 'undefined') {
    let employeeObj = data.employees.find((worker) => worker.firstName === employee.name);
    if (typeof employeeObj === 'undefined') {
      employeeObj = data.employees.find((worker) => worker.lastName === employee.name);
    }
    if (typeof employeeObj !== 'undefined') {
      return employeeObj;
    }
  }
  const employeeObj = data.employees.find((worker) => worker.id === employee.id);
  return employeeObj;
}

function getSingleCoverage(employee) {
  const worker = findEmployee(employee);
  if (typeof worker !== 'undefined') {
    const resp = worker.responsibleFor;
    const employeeCoverage = {
      id: worker.id,
      fullName: `${worker.firstName} ${worker.lastName}`,
      species: resp.map((animal) => data.species.find((species) => species.id === animal).name),
      locations: getLocations(worker),
    };
    return employeeCoverage;
  }
  throw new Error('Informações inválidas');
}

function getEmployeesCoverage(employee) {
  // seu código aqui
  if (typeof employee === 'undefined') {
    return getCompleteCoverage();
  }
  return getSingleCoverage(employee);
}

module.exports = getEmployeesCoverage;
