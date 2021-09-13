const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((element) => element.managers.some((elem) => elem === id));
}

const inter = (managerId) => {
  const b = data.employees.filter((ele) => ele.managers.some((elem) => elem === managerId));
  return b.map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
};
function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const c = inter(managerId);
    return c;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
