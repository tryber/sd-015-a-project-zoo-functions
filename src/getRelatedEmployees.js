const data = require('../data/zoo_data');

function isManager(id) {
  const allManagers = [];
  data.employees.forEach((employee) => {
    employee.managers.forEach((employeeManager) => {
      allManagers.push(employeeManager);
    });
  });
  const booleanIsManager = allManagers.some((idManager) => idManager === id);
  return booleanIsManager;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const listOfEmployeesManaged = [];
    const employeesManaged = data.employees.filter((employee) =>
      employee.managers.some((employeeManager) => employeeManager === managerId) === true);
    employeesManaged.forEach((employeeManaged) => {
      listOfEmployeesManaged.push(`${employeeManaged.firstName} ${employeeManaged.lastName}`);
    });
    return listOfEmployeesManaged;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
