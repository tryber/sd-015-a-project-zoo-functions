const { species, employees } = require('../data/zoo_data');

const options = (employee) => {
  if (employee.id) {
    return employees.find((idEmployee) => employee.id === idEmployee.id);
  }
  if (employee.name) {
    return employees.find((fullname) => fullname.firstName === employee.name
   || fullname.lastName === employee.name);
  }
};

const createObj = (obj) => ({

  id: obj.id,
  fullName: `${obj.firstName} ${obj.lastName}`,
  species: species.filter((specie) => obj.responsibleFor
    .includes(specie.id)).map((anim) => anim.name),
  locations: species.filter((specie) => obj.responsibleFor
    .includes(specie.id)).map((anim) => anim.location),
});

function getEmployeesCoverage(employee) {
  if (!employee) {
    return employees.map((person) => createObj(person));
  }
  if (!options(employee)) throw new Error('Informações inválidas');
  return createObj(options(employee));
}

module.exports = getEmployeesCoverage;
