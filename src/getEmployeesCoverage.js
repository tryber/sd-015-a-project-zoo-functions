const data = require('../data/zoo_data');

const workerInfo = ({ id, firstName, lastName, responsibleFor }) => ({
  id,
  fullName: `${firstName} ${lastName}`,
  species: responsibleFor.map((animal) => {
    const theAnimal = data.species.find((specie) => specie.id === animal);
    return theAnimal.name;
  }),
  locations: responsibleFor.map((animal) => {
    const theAnimal = data.species.find((specie) => specie.id === animal);
    return theAnimal.location;
  }),
});

function getEmployeesCoverage(idOrName) {
  if (!idOrName) {
    return data.employees.map((employee) => workerInfo(employee));
  }

  const { name, id } = idOrName;
  const workerSelected = data.employees
    .find((worker) => worker.firstName === name || worker.lastName === name || worker.id === id);

  if (!workerSelected) {
    throw new Error('Informações inválidas');
  }

  return workerInfo(workerSelected);
}

module.exports = getEmployeesCoverage;
