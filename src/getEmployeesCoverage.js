const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getPerson = (name, id) => employees.find((employee) =>
  (employee.firstName === name) || (employee.lastName === name) || (employee.id === id));

const getAnimalById = (id) => data.species.find((specie) => specie.id === id);

const getLocation = (id) => data.species.find((specie) => specie.id === id);

const getSingleCoverage = (obj) => {
  const { name, id } = obj;
  const person = getPerson(name, id);
  if (!person) throw new Error('Informações inválidas');
  const { firstName, lastName, responsibleFor } = person;
  return {
    id: person.id,
    fullName: `${firstName} ${lastName}`,
    species: responsibleFor.map((animal) => getAnimalById(animal).name),
    locations: responsibleFor.map((animal) => getLocation(animal).location),
  };
};

const getWholeCoverage = () => employees.map((employee) => {
  const { firstName, lastName, responsibleFor } = employee;
  return {
    id: employee.id,
    fullName: `${firstName} ${lastName}`,
    species: responsibleFor.map((animal) => getAnimalById(animal).name),
    locations: responsibleFor.map((animal) => getLocation(animal).location),
  };
});

function getEmployeesCoverage(obj) {
  // seu código aqui
  if (obj) return getSingleCoverage(obj);
  return getWholeCoverage();
}

module.exports = getEmployeesCoverage;
