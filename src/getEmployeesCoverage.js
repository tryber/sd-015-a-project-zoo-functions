const data = require('../data/zoo_data');

const getEmployeeArray = ({ name, id }) =>
  data.employees.find((e) => e.id === id || e.firstName === name || e.lastName === name); // "e" from employee.

function getEmployeesCoverage({ name, id }) {
  // seu código aqui
  const employeeArray = getEmployeeArray({ name, id });
  const { responsibleFor } = employeeArray;
  const animalsObj = data.species.filter((animal) => responsibleFor.includes(animal.id));
  const array = {
    id: employeeArray.id,
    fullName: `${employeeArray.firstName} ${employeeArray.lastName}`,
    species: [animalsObj[0].name, animalsObj[1].name],
    locations: [animalsObj[0].location, animalsObj[1].location],
  };

  return array;
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
