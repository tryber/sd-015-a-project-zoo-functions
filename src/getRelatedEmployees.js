const data = require('../data/zoo_data');

let managerTeam = [];

function isManager(id) {
  // seu código aqui
  let isMnger = false;
  data.employees.forEach((employee) => {
    if (employee.managers.some((manager) => manager === id)) {
      isMnger = true;
      managerTeam.push(`${employee.firstName} ${employee.lastName}`);
    }
  });
  return isMnger;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  managerTeam = [];
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return managerTeam;
  }
}

module.exports = { isManager, getRelatedEmployees };
