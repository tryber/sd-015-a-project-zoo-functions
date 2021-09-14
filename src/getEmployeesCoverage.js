const data = require('../data/zoo_data');
const specie = require('./getSpeciesByIds');

const { employees } = data;

function getIndicatedEmployee(obj) { // Função para retornar o objeto da pessoa colaboradora indicada no parâmetro(obj)
  const employee1 = employees.find((employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`;
    return fullName.includes(obj.name) || employee.id.includes(obj.id);
  });
  return employee1;
}
// console.log(getIndicatedEmployee({ id: 'id inválido' }))
function answerToReturn(obj) { // Esta função retorna o obj criado a partir da pessoa colaboradora.
  const indicatedEmployee = getIndicatedEmployee(obj);
  const objToReturn = {
    id: indicatedEmployee.id,
    fullName: `${indicatedEmployee.firstName} ${indicatedEmployee.lastName}`,
    species: specie(...indicatedEmployee.responsibleFor).map((animal) => animal.name),
    locations: specie(...indicatedEmployee.responsibleFor).map((animal) => animal.location),
  };
  return objToReturn;
}
// console.log(answerToReturn({ name: 'Sharonda' }))

function informationsOfAllEmployees() { // Função para retornar a informação de todos os employees caso nenhum parâmetro seja passado para a função principal(getEmployeesCoverage)
  const arrayWithAllObjs = [];
  employees.map((curr) => {
    const acc = {
      id: curr.id,
      fullName: `${curr.firstName} ${curr.lastName}`,
      species: specie(...curr.responsibleFor).map((animal) => animal.name),
      locations: specie(...curr.responsibleFor).map((animal) => animal.location),
    };
    arrayWithAllObjs.push(acc);
  });
  return arrayWithAllObjs;
}
// console.log(informationsOfAllEmployees())

function getEmployeesCoverage(obj) {
  // seu código aqui
  if (obj === undefined) return informationsOfAllEmployees();
  if (getIndicatedEmployee(obj) === undefined) throw new Error('Informações inválidas');
  return answerToReturn(obj);
}
// console.log(getEmployeesCoverage())
module.exports = getEmployeesCoverage;
