const { employees, species } = require('../data/zoo_data');

const throwError = () => {
  throw new Error('Informações inválidas');
};

const getSpeciesNameById = (id) => species.find(({ id: speciesId }) => speciesId === id).name;

const getEmployeeByName = (name) => {
  const foundEmployee = employees.find(({ firstName, lastName }) =>
    firstName === name || lastName === name);

  if (!foundEmployee) throwError();
  return foundEmployee;
};

const getEmployeeById = (id) => {
  const foundEmployee = employees.find(({ id: employeeId }) => employeeId === id);

  if (!foundEmployee) throwError();
  return foundEmployee;
};

const createSpeciesLocationArr = (speciesNames) =>
  species
    .filter(({ name }) => speciesNames.includes(name))
    .reduce((acc, { location }) => [...acc, location], []);

const getCoverageByName = (name) => {
  const { id, firstName, lastName, responsibleFor } = getEmployeeByName(name);
  const fullName = `${firstName} ${lastName}`;
  const speciesNames = responsibleFor.map(getSpeciesNameById);
  const locations = createSpeciesLocationArr(speciesNames);

  return { id, fullName, species: speciesNames, locations };
};

const getCoverageById = (id) => {
  const { firstName, lastName, responsibleFor } = getEmployeeById(id);
  const fullName = `${firstName} ${lastName}`;
  const speciesNames = responsibleFor.map(getSpeciesNameById);
  const locations = createSpeciesLocationArr(speciesNames);

  return { id, fullName, species: speciesNames, locations };
};

const getGeneralCoverage = () =>
  employees.map(({ id, firstName, lastName, responsibleFor }) => {
    const fullName = `${firstName} ${lastName}`;
    const speciesNames = responsibleFor.map(getSpeciesNameById);
    const locations = createSpeciesLocationArr(speciesNames);

    return { fullName, id, locations, species: speciesNames };
  });

function getEmployeesCoverage({ name, id } = {}) {
  if (name) return getCoverageByName(name);
  if (id) return getCoverageById(id);

  return getGeneralCoverage();
}

module.exports = getEmployeesCoverage;
