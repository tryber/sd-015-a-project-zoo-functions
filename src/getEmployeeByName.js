const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find(
    (worker) =>
      worker.lastName === employeeName || worker.firstName === employeeName,
  );
}

// console.log(getEmployeeByName('Emery'));
module.exports = getEmployeeByName;
