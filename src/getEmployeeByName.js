const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  } return data.employees.find((elemento) =>
    elemento.firstName === employeeName || elemento.lastName === employeeName);
};

console.log(getEmployeeByName());
module.exports = getEmployeeByName;
