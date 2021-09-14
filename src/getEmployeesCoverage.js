const data = require('../data/zoo_data');

const { species, employees } = data;

function getAnimalsInfo(responsibleFor) {
  return species.reduce((acc, { id, name, location }) => {
    if (responsibleFor.includes(id)) {
      acc.speciesRespFor.push(name);
      acc.locationsRespFor.push(location);
    }
    return acc;
  }, { speciesRespFor: [], locationsRespFor: [] });
}

function listOfAllEmployees() {
  return employees.reduce((acc, { id, firstName, lastName, responsibleFor }) => {
    const { speciesRespFor, locationsRespFor } = getAnimalsInfo(responsibleFor);
    const newObject = {
      id,
      fullName: `${firstName} ${lastName}`,
      species: speciesRespFor,
      locations: locationsRespFor,
    };
    const newAcc = [...acc, newObject];
    return newAcc;
  }, []);
}

function isValid({ name, id }) {
  if (id) {
    return employees.some((employee) => employee.id === id);
  }
  return employees.some(({ firstName, lastName }) =>
    [firstName, lastName].includes(name));
}

function getEmployeesCoverage(params) {
  if (!params) {
    return listOfAllEmployees();
  }
  const { name, id } = params;
  if (isValid({ name }) && !id) {
    return listOfAllEmployees().find(({ fullName }) => fullName.split(' ').includes(name));
  }
  if (!isValid({ id })) throw new Error('Informações inválidas');

  return listOfAllEmployees().find((employee) => employee.id === id);
}

module.exports = getEmployeesCoverage;
