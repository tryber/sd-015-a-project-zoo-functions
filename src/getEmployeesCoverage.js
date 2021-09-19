const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const employeePeople = (employee) => {
  if (employee.name) {
    return employees.find((param) =>
      param.firstName === employee.name || param.lastName === employee.name);
  }

  if (employee.id) {
    return employees.find((param) =>
      employee.id === param.id);
  }
};

const makingObject = (obj) => ({

  id: obj.id,
  fullName: `${obj.firstName} ${obj.lastName}`,
  species: species.filter((specie) => obj.responsibleFor
    .includes(specie.id)).map((anim) => anim.name),
  locations: species.filter((specie) => obj.responsibleFor
    .includes(specie.id)).map((anim) => anim.location),
});

function getEmployeesCoverage(employee) {
  if (!employee) {
    return employees.map((person) => makingObject(person));
  }
  if (!employeePeople(employee)) throw new Error('Informações inválidas');
  return makingObject(employeePeople(employee));
}

module.exports = getEmployeesCoverage;
