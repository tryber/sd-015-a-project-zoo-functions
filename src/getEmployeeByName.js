const data = require('../data/zoo_data');

function getitemByemployee(emp) {
  // seu código aqui
  if (emp === undefined) return {};
  return data.employees.find((item) => item.firstName === emp || item.lastName === emp);
}

module.exports = getitemByemployee;
