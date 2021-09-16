const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// requerimento do array employess no documento zoo_data.js

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  // caso nenhum valor for passado para o parâmetro retorna-se um array vazio {}; 
  return employees.find((fun) => fun.firstName === employeeName || fun.lastName === employeeName);
  // criei um return que usa o find() para encontrar o funcionário que tenha o nome ou sobrenome que seja igual ao valor do parâmetro (employeeName);
}

module.exports = getEmployeeByName;
