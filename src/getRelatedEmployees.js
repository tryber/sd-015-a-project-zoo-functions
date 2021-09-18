const data = require('../data/zoo_data');

const manager = data.employees.map((employees) => employees.managers);

const listManager = [];

const getNames = (id) => {
  const listNames = data.employees.map((employee) => {
    let name;
    for (let i = 0; i < employee.managers.length; i += 1) {
      if (employee.managers[i] === id) {
        name = `${employee.firstName} ${employee.lastName}`;
      }
    }
    return name;
  });
  return listNames.filter((name) => name !== undefined);
};

const mountList = (i) => {
  if (manager[i].length !== 0) {
    for (let j = 0; j < manager[i].length; j += 1) {
      listManager.push(manager[i][j]);
    }
  }
};

const listaManager = () => {
  for (let i = 0; i < manager.length; i += 1) {
    mountList(i);
  }
  return listManager.filter((managerN, index) => listManager.indexOf(managerN) === index);
};

const isManager = (id) => {
  const managers = listaManager();
  let retorno = true;
  if (managers.filter((idManager) => idManager === id).length === 0) {
    retorno = false;
  } else {
    retorno = true;
  }
  return retorno;
};

const getRelatedEmployees = (managerId) => {
  let retorno = [];
  if (isManager(managerId)) {
    retorno = getNames(managerId);
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return retorno;
};

module.exports = { isManager, getRelatedEmployees };
