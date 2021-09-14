// Ref:
// https://github.com/tryber/sd-015-a-project-zoo-functions/tree/leonardo-felix-zoo-functions-project
// https://github.com/tryber/sd-015-a-project-zoo-functions/tree/pedro-guarize-zoo-functions-project

const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees
    .find((employee) => employee.lastName === employeeName || employee.firstName === employeeName);
};

module.exports = getEmployeeByName;
