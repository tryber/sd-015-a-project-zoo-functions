const data = require('../data/zoo_data');

const { species, employees } = data;

const empIdName = () => employees.map((elem) => ({
  id: elem.id,
  fullName: `${elem.firstName} ${elem.lastName}`,
  species: species.reduce((acc, curr) => {
    if (elem.responsibleFor.includes(curr.id)) {
      acc.push(curr.name);
    } return acc;
  }, []),
  locations: species.reduce((acc2, curr2) => {
    if (elem.responsibleFor.includes(curr2.id)) {
      acc2.push(curr2.location);
    } return acc2;
  }, []),
}));

// const employeeName = (name) => empIdName().find((elem) => elem.fullName.includes(name));

// const employeeId = (id) => empIdName().find((elem) => elem.id.includes(id));

function getEmployeesCoverage(obj) {
  if (!obj) {
    return empIdName();
  }
  const employeeNameId = () => empIdName().find((nameId) => nameId.fullName.includes(obj.name)
  || nameId.id.includes(obj.id));

  if (!employeeNameId()) {
    throw new Error('Informações inválidas');
  }
  return employeeNameId();
}
// console.log(getEmployeesCoverage())

module.exports = getEmployeesCoverage;
