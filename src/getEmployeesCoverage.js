const data = require('../data/zoo_data');

function getSpecies(id) {
  const { name, location } = data.species.find((el) => el.id === id);
  return [name, location];
}

function getByName(name) {
  const { id: employeeId, firstName, lastName, responsibleFor } = data.employees
    .find((el) => el.firstName.includes(name) || el.lastName.includes(name));
  const allSpeciesNameAndLocation = responsibleFor.map((animalId) => getSpecies(animalId));
  const result = {
    id: employeeId,
    fullName: `${firstName} ${lastName}`,
    species: allSpeciesNameAndLocation.map((ani) => ani[0]),
    locations: allSpeciesNameAndLocation.map((ani) => ani[1]),
  };
  return result;
}

function getById(id) {
  const payload = data.employees
    .find((el) => el.id === id);
  if (!payload) {
    throw new Error('Informações inválidas');
  }
  const { id: employeeId, firstName, lastName, responsibleFor } = payload;
  const allSpeciesNameAndLocation = responsibleFor.map((animalId) => getSpecies(animalId));
  const result = {
    id: employeeId,
    fullName: `${firstName} ${lastName}`,
    species: allSpeciesNameAndLocation.map((ani) => ani[0]),
    locations: allSpeciesNameAndLocation.map((ani) => ani[1]),
  };
  return result;
}

function getEmployeesCoverage(request) {
  if (!request) {
    return data.employees.map((employer) => getByName(employer.firstName));
  }
  const { name, id } = request;
  if (name) {
    return getByName(name);
  }
  if (id) {
    return getById(id);
  }
}

module.exports = getEmployeesCoverage;
