const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Retirado do repositório: https://github.com/tryber/sd-015-a-project-zoo-functions/blob/rafael-scherer-project-zoo-functions/src/getEmployeesCoverage.js
const findLocations = (speciesNames) =>
  data.species
    .filter(({ name }) => speciesNames.includes(name))
    .reduce((acc, { location }) => [...acc, location], []);

function resultado(employe) {
  const { id, firstName, lastName, responsibleFor } = employe;
  const fullName = `${firstName} ${lastName}`;
  const species = responsibleFor.map((i) => data.species.find(({ id: SId }) => SId === i).name);
  const locations = findLocations(species);
  return { fullName, id, locations, species };
}

function searchByName(name) {
  if (employees.some(({ firstName, lastName }) =>
    firstName === name || lastName === name)) {
    const employe = employees.find(({ firstName, lastName }) =>
      firstName === name || lastName === name);
    return resultado(employe);
  } throw new Error('Informações inválidas');
}

function searchByid(id) {
  if (employees.some((i) => i.id === id)) {
    const employe = employees.find((i) => i.id === id);
    return resultado(employe);
  } throw new Error('Informações inválidas');
}

// Retirado do repositório: https://github.com/tryber/sd-015-a-project-zoo-functions/blob/rafael-scherer-project-zoo-functions/src/getEmployeesCoverage.js
const fullList = () =>
  employees.map(({ id, firstName, lastName, responsibleFor }) => {
    const fullName = `${firstName} ${lastName}`;
    const species = responsibleFor.map((i) => data.species.find(({ id: SId }) => SId === i).name);
    const locations = findLocations(species);

    return { fullName, id, locations, species };
  });

function getEmployeesCoverage({ name, id } = {}) {
  if (name) { return searchByName(name); }
  if (id) { return searchByid(id); } return fullList();
}

module.exports = getEmployeesCoverage;
