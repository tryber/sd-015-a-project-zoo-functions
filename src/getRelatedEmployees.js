const data = require('../data/zoo_data');

function isManager(id) {
  const employeeNames = data.employees.reduce((acc, curr) => acc.concat(curr.managers), []);// armazena qual funcionario tem FUNÇÃO manager
  return employeeNames.some((managerId) => managerId === id);// retorna se algum funcionário recebe a função de gerenciar algum animal
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) { // se isManager recebe manegerId for verdadeiro
    return data.employees.reduce((acc, curr) => { // retorna o funcionário que satisfaz
      if (curr.managers.includes(managerId) === true) { // se o funcionário corrente tiver incluso em suas funções 'managerId'
        const fullName = `${curr.firstName} ${curr.lastName}`;// const faz a concatenação para formar o nome completo
        return acc.concat(fullName);// retorna o funcionário atual pelo seu nome completo
      }
      return acc;// retorna um funcionário ..mas não satisfaz a condição
    }, []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');// emite msg de erro quando não satisfaz a condição
}
// com dificuldade de desenvolver o código..o raciocínio é entendido.. código baseado no da colega Tamyres
module.exports = { isManager, getRelatedEmployees };
