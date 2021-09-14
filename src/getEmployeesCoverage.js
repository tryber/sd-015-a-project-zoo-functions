const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getPerson = (name, id) => employees.find((employee) =>
  (employee.firstName === name) || (employee.lastName === name) || (employee.id === id));

const getAnimalById = (id) => data.species.find((specie) => specie.id === id);

const getLocation = (id) => data.species.find((specie) => specie.id === id);

const getSingleCoverage = (person) => {
  const obj = {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: person.responsibleFor.map((animal) => getAnimalById(animal).name),
    // locations: obj.species.map((animal) =>)
  };
};

function getEmployeesCoverage(obj) {
  // seu código aqui
  const { name, id } = obj;
  const person = getPerson(name, id);
  const { firstName, lastName, responsibleFor } = person;
  const singleCoverage = {
    id: person.id,
    fullName: `${firstName} ${lastName}`,
    species: responsibleFor.map((animal) => getAnimalById(animal).name),
    locations: responsibleFor.map((animal) => getLocation(animal).location),
  };
  return singleCoverage;
}

module.exports = getEmployeesCoverage;

console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));
