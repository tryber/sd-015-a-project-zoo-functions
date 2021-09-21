const data = require('../data/zoo_data');

const lookForWorker = (worker) => data.employees.find((element) =>
  element.firstName === worker.name
  || element.lastName === worker.name
  || element.id === worker.id);

function addObj(resultLookForWorker) {
  const responsibleSpecies = data.species
    .filter((element) => resultLookForWorker.responsibleFor.includes(element.id))
    .map((element2) => element2.name);

  const locationAnimals = data.species
    .filter((element3) => resultLookForWorker.responsibleFor.includes(element3.id))
    .map((element4) => element4.location);

  return {
    id: resultLookForWorker.id,
    fullName: `${resultLookForWorker.firstName} ${resultLookForWorker.lastName}`,
    species: responsibleSpecies,
    locations: locationAnimals,
  };
}

function getEmployeesCoverage(worker) {
  if (!worker) {
    return data.employees.map((value) => addObj(value));
  }
  if (!lookForWorker(worker)) {
    throw new Error('Informações inválidas');
  } else return addObj(lookForWorker(worker));
}

console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
