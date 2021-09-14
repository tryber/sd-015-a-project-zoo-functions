const data = require('../data/zoo_data');

const { species, employees } = data;

const getSpecies = (animalIds) =>
  animalIds.map(
    (animalId) => species.find((specie) => specie.id === animalId).name,
  );

const getLocations = (animalIds) =>
  animalIds.map(
    (animalId) => species.find((specie) => specie.id === animalId).location,
  );

const getAllEmployees = () =>
  employees.map((employee) => {
    const newObj = { id: null, fullName: null, species: null, locations: null };
    newObj.id = employee.id;
    newObj.fullName = `${employee.firstName} ${employee.lastName}`;
    newObj.species = getSpecies(employee.responsibleFor);
    newObj.locations = getLocations(employee.responsibleFor);
    return newObj;
  });

const verifyParams = (name, id) => {
  const verified = employees.some(
    (employee) =>
      employee.firstName === name
      || employee.lastName === name
      || employee.id === id,
  );
  if (verified === false) throw new Error('Informações inválidas');
};

const getEmployeeByName = (name) => {
  const allEmployees = getAllEmployees();
  return allEmployees.find((employee) => employee.fullName.includes(name));
};

const getEmployeeById = (id) => {
  const allEmployees = getAllEmployees();
  return allEmployees.find((employee) => employee.id === id);
};

function getEmployeesCoverage(employee) {
  // seu código aqui
  if (employee === undefined) return getAllEmployees();
  const { name, id } = employee;
  verifyParams(name, id);
  if (name) return getEmployeeByName(name);
  if (id) return getEmployeeById(id);
}

module.exports = getEmployeesCoverage;
