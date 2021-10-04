const data = require('../data/zoo_data');

function getEmployeesCoverage(idOrName) {
  // seu código aqui
  if (idOrName) {
    const searchEmployee = data.employees.find(({ id, firstName, lastName }) =>
      id === idOrName || firstName === idOrName || lastName === idOrName);
    return {
      [`${searchEmployee.firstName} ${searchEmployee.lastName}`]: searchEmployee.responsibleFor
        .map((animal) => data.species.find((specie) => specie.id === animal).name),
    };
  }
  const workers = data.employees.reduce((accumulator, currentValue) => {
    accumulator[`${currentValue.firstName} ${currentValue.lastName}`] = currentValue.responsibleFor
      .map((animal) => data.species.find((specie) => specie.id === animal).name);
    return accumulator;
  }, {});
  return workers;
}

module.exports = getEmployeesCoverage;
