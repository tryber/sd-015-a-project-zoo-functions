const data = require('../data/zoo_data');

function isManager(id) {

  const gerente = data.employees
  for (let index = 0; index < gerente.length; index += 1) {
    if (gerente[index].managers.length !== 0) {
      for (let index1 = 0; index1 < gerente[index].managers.length; index1 += 1) {
        if (gerente[index].managers[index1] === id) {
          return true;
        }
      }
    }
  }
  return false;
}

function getRelatedEmployees(managerId) {
  arrayColabora = [];
  
  if (isManager(managerId)) {
    const gerente = data.employees
    for (let index = 0; index < gerente.length; index += 1) {
      if (gerente[index].managers.length !== 0) {
        for (let index1 = 0; index1 < gerente[index].managers.length; index1 += 1) {
          if (gerente[index].managers[index1] === managerId) {
            arrayColabora.push(`${gerente[index].firstName} ${gerente[index].lastName}`);
          }
        }
      }
    }
  }
  else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return(arrayColabora);
}
getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');



module.exports = { isManager, getRelatedEmployees };
