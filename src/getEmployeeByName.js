const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const employ = employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);
  return employ;
}

module.exports = getEmployeeByName;
/* tentei implementar um filter, mas nao consegui,tive que usar o if e colocar um find,logo mais vejo o pq nao deu pra implementar o filter */
