const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {};
  // Sem parâmetros, retorna um objeto vazio
  // O método find() retorna o valor do primeiro elemento do array data.employees que satisfaz o teste. O método find() retorna o valor do primeiro elemento de um array que retornar true para uma função de teste fornecida. Se não houver alguma, retorna undefined.
  return data.employees
    .find((obj) => obj.firstName === employeeName || obj.lastName === employeeName);
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// find: Para ficar fácil de entender, pense que é como filter(), mas, ao invés de retornar outro array/objeto com os correspondentes, retorna somente o primeiro valor/objeto que passe no teste (que é uma função). https://desenvolvimentoparaweb.com/javascript/every-some-find-includes-javascript/
// console.log(getEmployeeByName('Emery'));
module.exports = getEmployeeByName;
