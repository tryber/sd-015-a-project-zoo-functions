const { employees } = require('../data/zoo_data');

const isManager = (employeeId) => employees.some(({ managers }) => managers.includes(employeeId));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const employeesFound = employees.filter(({ managers }) => managers.includes(managerId));

    return employeesFound.reduce(
      (namesArr, { firstName, lastName }) => [...namesArr, `${firstName} ${lastName}`],
      [],
    );
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
