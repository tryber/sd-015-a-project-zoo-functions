const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let filterByName = {};
  if (employeeName !== undefined) {
    filterByName = data.employees.filter((worker) => {
      let workerData = null;
      if (worker.firstName === employeeName || worker.lastName === employeeName) {
        workerData = worker;
      }
      return workerData;
    });
    return filterByName[0];
  }
  return filterByName;
}

module.exports = getEmployeeByName;
