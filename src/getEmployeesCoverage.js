const getId = require('./getSpeciesByIds');
// essa função é da primeira questão que foi reaproveitada.
// essa forma de pensar foi passada pelos colegas Fernando Sena e Breno de Cunha da turma 15 A.
const { employees } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

const returnArray = () => employees; // primeira função retorna array original

const returnArrayModify = () => { // função auxiliar que vai formatar um array.
  const arrayEmployees = returnArray(); // função da linha 7.
  const arrayToReturn = []; // array que vai receber o objeto
  arrayEmployees.forEach((element) => { // o forEach vai formatar o objeto que é pedido no parametro
    const obj = {
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: getId(...element.responsibleFor).map((animal) => animal.name), // função que encontra o id
      locations: getId(...element.responsibleFor).map((animal) => animal.location),
      // o getId é uma função reaproveitada, olhar na linha 1.
    };
    arrayToReturn.push(obj); // empurra o array para um vaizio e retorna ele.
  });
  return arrayToReturn; // retorna o objeto formatado
};

const getEmployeeByName = (worker) => {
  // quando passar o nome no parametro ele vai procurar no objeto que foi feito e verificar no parametro, se tiver retorna
  // o objeto selecionado, para isso ele faz a verificação no parametro da função.
  const arrayCompleted = returnArrayModify(); // função que retorna o array modificado da linha 11
  const findWorkerByName = arrayCompleted.find((element) => element.fullName.includes(worker.name));
  return findWorkerByName;
};

const getEmployeeById = (workerId) => { // a mesma coisa nessa função ele compara o id do parametro com o id do objeto.
  const arrayCompleted = returnArrayModify(); // função que retorna o array modificado da linha 11
  const findWorkerId = arrayCompleted.find((element) => element.id === workerId.id);
  return findWorkerId;
};

const getEmployeesCoverage = (colaborationPeople) => { // função principal que faz verificações.
  // seu código aqui
  const arrayCompleted = returnArrayModify(); // função que retorna o array modificado da linha 11
  if (!colaborationPeople) return arrayCompleted; // se não tiver parametro retorna o array completo
  // se tiver parametro ele vai procurar nesse objeto que está no parametro da função se o nome está lá
  // se tiver ele retorna o objeto completo.
  const employeeName = getEmployeeByName(colaborationPeople); // função que acha o nome da pessoa colaboradora linha 26
  if (employeeName) {
    return employeeName;
  }
  // se tiver parametro no caso o id do array for o mesmo que o objeto retorna o objeto
  const employeeId = getEmployeeById(colaborationPeople); // função que acha o Id da pessoa linha 32.
  if (employeeId) {
    return employeeId;
  }
  throw new Error('Informações inválidas'); // se o parametro for errado lança uma mensagem de error.
};

module.exports = getEmployeesCoverage;
