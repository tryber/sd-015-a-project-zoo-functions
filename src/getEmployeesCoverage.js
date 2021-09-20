const data = require('../data/zoo_data');

const employee = (worker) => data.employees.find((x) =>
  x.firstName === worker.name || x.lastName === worker.name || x.id === worker.id);

function createObj(obj) {
  const animalSpecie = data.species.filter((x) => obj.responsibleFor
    .includes(x.id)).map((y) => y.name);
  const animalLocation = data.species.filter((x) => obj.responsibleFor
    .includes(x.id)).map((y) => y.location);

  return {
    id: obj.id,
    fullName: `${obj.firstName} ${obj.lastName}`,
    species: animalSpecie,
    locations: animalLocation,
  };
}

function getEmployeesCoverage(worker) {
  if (worker === undefined) {
    return data.employees.map((x) => createObj(x));
  }
  if (employee(worker) === undefined) {
    throw new Error('Informações inválidas');
  } else {
    return createObj(employee(worker));
  }
}
console.log(createObj(employee({ name: 'Nigel' })));
console.log(getEmployeesCoverage(createObj(employee({ name: 'Nigel' }))));

module.exports = getEmployeesCoverage;
