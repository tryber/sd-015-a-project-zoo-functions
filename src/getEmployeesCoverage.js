const data = require('../data/zoo_data');

const speciesId = (epeopleW) => data.species
  .filter((element) => epeopleW.responsibleFor
    .includes(element.id));

const objPeople = data.employees.map((e) => ({
  id: e.id,
  fullName: `${e.firstName} ${e.lastName}`,
  species: speciesId(e).map((animal) => animal.name),
  locations: speciesId(e).map((local) => local.location),
}));

const pegarEmployee = ({ name, id }) => data.employees
  .find((e) => e.id === id || e.firstName === name || e.lastName === name);

function getEmployeesCoverage(param) {
  if (!param) {
    return objPeople;
  }
  const employes = pegarEmployee(param);
  if (!employes) throw new Error('Informações inválidas');
  return objPeople.find((e) => e.id === employes.id);
}

module.exports = getEmployeesCoverage;
