const data = require('../data/zoo_data');

const [...employees] = data.employees;
const [...species] = data.species;

const getAnimalNames = (ids) => ids.map((idAnimal) => species
  .find((specie) => idAnimal === specie.id))
  .map((animal) => animal.name);

const getAnimalLocations = (id) => id.map((idAnimal) => species
  .find((specie) => idAnimal === specie.id))
  .map((animal) => animal.location);

const filterEmployee = (name, id) => employees.filter((employee) => {
  const fullName = employee.firstName + employee.lastName;
  return fullName.includes(name) || employee.id.includes(id);
});

const getAll = () => employees.map((employee) => {
  const fullName = `${employee.firstName} ${employee.lastName}`;
  const algo = {
    id: employee.id,
    fullName,
    species: getAnimalNames(employee.responsibleFor),
    locations: getAnimalLocations(employee.responsibleFor),
  };
  return algo;
});
function getEmployeesCoverage(obj = { name: '', id: '' }) {
  const { name, id } = obj;
  const filteredEmployee = filterEmployee(name, id);
  if (filteredEmployee.length === 0) {
    throw new Error('Informações inválidas');
  }
  if (name === '' && id === '') {
    return getAll();
  }
  const responsibleForIds = filteredEmployee.reduce((acc, filtered) => filtered.responsibleFor, []);
  const animalNames = getAnimalNames(responsibleForIds);
  const animalLocation = getAnimalLocations(responsibleForIds);
  return {
    id: `${filteredEmployee[0].id}`,
    fullName: `${filteredEmployee[0].firstName} ${filteredEmployee[0].lastName}`,
    species: animalNames,
    locations: animalLocation,
  };
}

module.exports = getEmployeesCoverage;
