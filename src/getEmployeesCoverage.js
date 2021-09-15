const data = require('../data/zoo_data');

function getSpecie(tgtEmp, animalFilter) {
  return tgtEmp.responsibleFor.map(
    (elemSpecie) =>
      data.species.find((specieName) => elemSpecie === specieName.id)[
        animalFilter
      ],
  );
}

function createReturnAll() {
  return data.employees.map((tgtEmployee) => ({
    id: tgtEmployee.id,
    fullName: `${tgtEmployee.firstName} ${tgtEmployee.lastName}`,
    species: getSpecie(tgtEmployee, 'name'),
    locations: getSpecie(tgtEmployee, 'location'),
  }));
}

function createReturnSpecific(employeeData) {
  return {
    id: employeeData.id,
    fullName: `${employeeData.firstName} ${employeeData.lastName}`,
    species: getSpecie(employeeData, 'name'),
    locations: getSpecie(employeeData, 'location'),
  };
}

function getDataByName(employeeName) {
  const dataByNameResult = data.employees.find(
    (elem) => elem.firstName === employeeName || elem.lastName === employeeName,
  );
  if (!dataByNameResult) {
    throw new Error('Informações inválidas');
  }
  return createReturnSpecific(dataByNameResult);
}

function getDataById(employeeId) {
  const dataByIdResult = data.employees.find((elem) => elem.id === employeeId);
  if (!dataByIdResult) {
    throw new Error('Informações inválidas');
  }
  return createReturnSpecific(dataByIdResult);
}

function getEmployeesCoverage(employee) {
  if (!employee) {
    return createReturnAll();
  }
  const { name, id } = employee;
  if (!id) {
    return getDataByName(name);
  }
  return getDataById(id);
}

module.exports = getEmployeesCoverage;
