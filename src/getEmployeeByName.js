const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const firstOrLastName = data.employees.find(
    (elem) => elem.firstName === employeeName || elem.lastName === employeeName,
  );
  // console.log(data.employees.filter((ele) => ele.lastName === 'Spry'));
  // const mapping = data.employees.map((ele) => ele)

  return firstOrLastName;
}

console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;

// 3. Implemente a função getEmployeeByName
// Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

// O que será avaliado

// Sem parâmetros, retorna um objeto vazio
// Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// Quando provido o último nome do funcionário, retorna o objeto do funcionário
