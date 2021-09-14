const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((managers) => managers.managers.includes(id));
}

function getRelatedEmployees(id) {
  // seu código aqui
  if (isManager(id)) {
    const arrayRespFor = [];
    data.employees.forEach(({ firstName, lastName, managers }) => {
      if (managers.some((manager) => manager.includes(id))) {
        arrayRespFor.push(`${firstName} ${lastName}`);
      }
      return arrayRespFor;
    })
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
