const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const verifyId = employees.some((employee) =>
    employee.managers.some((manager) => manager === id));
  return verifyId;
}
// const id = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
function getRelatedEmployees(managerId, id) {
  // if (isManager(id)) {
//     const manager = employees.find((employee) => employee.managers.find((manager) => manager === id));
//     console.log(manager.responsibleFor);
//     const { responsibleFor } = manager;
// const nameEmployees = responsibleFor.map((under) => {
//   const a = under;
//   employees.find((employee) => employee.id === a).firstName
// });
//   console.log(nameEmployees);
  // return nameEmployees;
  // return manager.responsibleFor;
  // }
  // console.log(nameEmployees);
  //   throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
