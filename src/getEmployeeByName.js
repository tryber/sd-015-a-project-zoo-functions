const data = require('../data/zoo_data');

const searchName = (employeeName) => {
  const name1 = data.employees.find((search) => search.lastName === employeeName);
  const name2 = data.employees.find((search) => search.firstName === employeeName);
  return name1 || name2;
};
const getEmployeeByName = (employeeName) => {
  let retorno = {};
  if (employeeName !== undefined) {
    retorno = searchName(employeeName);
  } else {
    retorno = {};
  }
  return retorno;
};

module.exports = getEmployeeByName;
