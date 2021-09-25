const data = require('../data/zoo_data');

function isManager(id) {
  const gerente = data.employees;
  let saida = false;
  for (let index = 0; index < gerente.length; index += 1) {
    if ((gerente[index].managers.length !== 0) && (!saida)) {
      const existe = gerente[index].managers;
      saida = existe.some((elemento) => elemento === id);
    }
  }
  return saida;
}

function getRelatedEmployees(managerId) {
  let arrayColabora = [];
  if (isManager(managerId)) {
    const gerente = data.employees;
    gerente.forEach((elemento, index) => {
      for (let index1 = 0; index1 < elemento.managers.length; index1 += 1) {
        const aaa = elemento.managers;
        aaa.forEach((elemento1) => {
          if (elemento1 === managerId)     
            arrayColabora.push(`${gerente[index].firstName} ${gerente[index].lastName}`);
        })
      }
    });
  }
   else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return (arrayColabora);
}
 console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'))

module.exports = { isManager, getRelatedEmployees };
