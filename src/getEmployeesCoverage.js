const getId = require('./getSpeciesByIds');
// essa função é da primeira questão que foi reaproveitada.
// essa forma de pensar foi passada pelos colegas Fernando Sena e Breno de Cunha da turma 15 A.
const { employees } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

function returnArray() { // primeira função retorna array original
  return employees;
}

function returnArrayModify() { // função auxiliar que vai formatar um array.
  const arrayEmployees = returnArray(); // função da linha 7.
  const arrayToReturn = []; // array que vai receber o objeto
  arrayEmployees.forEach((element) => { // o forEach vai formatar o objeto que é pedido no parametro
    const obj = {
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: getId(...element.responsibleFor).map((animal) => animal.name), // função que encontra o id
      locations: getId(...element.responsibleFor).map((animal) => animal.location),
    };
    arrayToReturn.push(obj); // empurra o array para um vaizio e retorna ele.
  });
  return arrayToReturn; // retorna o objeto formatado
}

function getEmployeesCoverage(colaborationPeople) { // função principal que faz verificações.
  // seu código aqui
  const arrayCompleto = returnArrayModify(); // função que retorna o array modificado da linha 11
  if (!colaborationPeople) return arrayCompleto; // se não tiver parametro retorna o array completo
  // se tiver parametro ele vai procurar nesse objeto que está no parametro da função se o nome está lá
  // se tiver ele retorna o objeto completo.
  if (arrayCompleto.find((element) => element.fullName.includes(colaborationPeople.name))) {
    return arrayCompleto.find((element) => element.fullName.includes(colaborationPeople.name));
  }
  // se tiver parametro no caso o id do array for o mesmo que o objeto retorna o objeto
  if (arrayCompleto.find((element) => element.id === colaborationPeople.id)) {
    return arrayCompleto.find((element) => element.id === colaborationPeople.id);
  }
  throw new Error('Informações inválidas'); // se o parametro for errado lança uma mensagem de error.
}

module.exports = getEmployeesCoverage;
