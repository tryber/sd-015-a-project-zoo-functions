const data = require('../data/zoo_data');

const getId = (employee) => (
  employee.id ? employee.id : data.employees
    .find((e) => e.firstName === employee.name || e.lastName === employee.name).id
);

const getFullName = (employee) => (
  employee.id
    ? `${data.employees
      .find((e) => e.id === employee.id).firstName} ${data.employees
      .find((e) => e.id === employee.id).lastName}`
    : `${data.employees
      .find((e) => e.firstName === employee.name
          || e.lastName === employee.name).firstName} ${data.employees
      .find((e) => e.firstName === employee.name
          || e.lastName === employee.name).lastName}`
);

const getSpecies = (employee) => (
  employee.id
    ? data.employees.find((e) => e.id === employee.id).responsibleFor
      .map((e) => data.species.find((el) => el.id === e).name)
    : data.employees
      .find((e) => e.firstName === employee.name
        || e.lastName === employee.name).responsibleFor.map((e) => data.species
        .find((el) => el.id === e).name)
);

const checkId = (id) => {
  if (id !== undefined) {
    return id.length === 36;
  }
};

const makeAllArray = () => (
  data.employees.map((e) => ({
    id: getId({ id: e.id }),
    fullName: getFullName({ id: e.id }),
    species: getSpecies(({ id: e.id })),
    locations: getSpecies(({ id: e.id }))
      .map((el) => data.species.find((ele) => ele.name === el).location) }))
);

const makeFilteredObject = (employee) => (
  { id: getId(employee),
    fullName: getFullName(employee),
    species: getSpecies(employee),
    locations: getSpecies(employee)
      .map((e) => data.species.find((el) => el.name === e).location) }
);

function getEmployeesCoverage(employee) {
  let result;
  if (!employee) {
    result = makeAllArray();
  } else if (employee.name || (employee.id && checkId(employee.id))) {
    result = makeFilteredObject(employee);
  } else {
    throw new Error('Informações inválidas');
  }
  return result;
}

module.exports = getEmployeesCoverage;
