const data = require('../data/zoo_data');

function isManager(id) {
  let validateManager = false;
  validateManager = data.employees.some((element) => element.managers.includes(id));

  // data.employees.forEach((person) => {
  //   if (person.managers.includes(id)) {
  //     validateManager = true;
  //   }
  // });
  // console.log(validateManager);
  return validateManager;
}

function getRelatedEmployees(managerId) {
  const managerResponse = [];

  if (!isManager(managerId)) {
    throw new Error(
      'O id inserido não é de uma pessoa colaboradora gerente!',
    );
  }
  data.employees.forEach((person) => {
    if (person.managers.includes(managerId)) {
      managerResponse.push(`${person.firstName} ${person.lastName}`);
    }
  });
  // let teste = data.employees.filter((element) => element.managers.includes(managerId));
  // const resultTeste = data.employees.map((element) => `${element.firstName} ${element.lastName}`);
  // console.log(resultTeste);
  return managerResponse;
}
// getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');
module.exports = { isManager, getRelatedEmployees };
