const { employees } = require('../data/zoo_data');

function isManager(id) {
  const managersNames = employees.reduce((total, worker) => total.concat(worker.managers), []);
  return managersNames.some((managerId) => managerId === id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return employees.reduce((acc, worker) => {
      if (worker.managers.includes(managerId) === true) {
        const fullName = `${worker.firstName} ${worker.lastName}`;
        return acc.concat(fullName);
      }
      return acc;
    }, []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
