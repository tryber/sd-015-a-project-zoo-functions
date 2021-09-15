const getId = require('./getSpeciesByIds');
// essa função é da primeira questão que foi reaproveitada.
// essa forma de pensar foi passada pelos colegas Fernando Sena e Breno de Cunha
const { employees } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

function returnArray() { // primeira função retorna array original
  return employees;
}

function returnArrayModify() { // função auxiliar que vai formatar um array.
  const arrayEmployees = returnArray(); // função da linha 7.
  const arrayToReturn = [];
  arrayEmployees.forEach((element) => {
    const obj = {
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: getId(...element.responsibleFor).map((animal) => animal.name), // função que encontra o id
      locations: getId(...element.responsibleFor).map((animal) => animal.location),
    };
    arrayToReturn.push(obj); // empurra o array para um vaizio e retorna ele.
  });
  return arrayToReturn;
}

function getEmployeesCoverage(colaborationPeople) { // função principal que faz verificações.
  // seu código aqui
  const arrayCompleto = returnArrayModify();
  if (!colaborationPeople) return arrayCompleto;
  if (arrayCompleto.find((element) => element.fullName.includes(colaborationPeople.name))) {
    return arrayCompleto.find((element) => element.fullName.includes(colaborationPeople.name));
  }
  if (arrayCompleto.find((element) => element.id === colaborationPeople.id)) {
    return arrayCompleto.find((element) => element.id === colaborationPeople.id);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
