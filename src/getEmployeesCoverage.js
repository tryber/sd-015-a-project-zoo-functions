const data = require('../data/zoo_data');

const listWorker = (worker) => data.employees.find((workerElement) =>
  workerElement.firstName === worker.name
 || workerElement.lastName === worker.name
  || workerElement.id === worker.id);
// aqui vou selecionar o trabalhador usando os || consigo apontar como primeiro nome, ultimo nome ou id

function respoWork(workTaref) {
  const rSpecies = data.species.filter((element) =>
    workTaref.responsibleFor.includes(element.id))
    .map((element2) => element2.name);
  // respowork é o que vai me dizer quais animais o trabalhador é responsavel
  const animaLoc = data.species.filter((element3) =>
    workTaref.responsibleFor.includes(element3.id))
    .map((element4) => element4.location);
  // nesta parte vai me dar a localizaçao dos animais
  return {
    id: workTaref.id,
    fullName: `${workTaref.firstName} ${workTaref.lastName}`,
    species: rSpecies,
    locations: animaLoc,
  };
  // aqui é o array montado
}
function getEmployeesCoverage(worker) {
  // seu código aqui
  if (!worker) {
    return data.employees.map((value) => respoWork(value));
  }
  if (!listWorker(worker)) {
    throw new Error('Informações inválidas');
  } else return respoWork(listWorker(worker));
}
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
