const {
  employees,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {

}

function getRelatedEmployees(managerId) {
  const aux = employees.filter((current) => current.managers.includes(managerId));

  if (isManager(aux));
}

module.exports = {
  isManager,
  getRelatedEmployees,
};
