const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

const checkName = (employeeName) => data.employees.find((name) =>
  name.firstName === employeeName
  || name.lastName === employeeName
  || name.id === employeeName);

const getByName = (obj) => ({
  id: `${obj.id}`,
  fullName: `${obj.firstName} ${obj.lastName}`,
  species: getSpeciesByIds(...obj.responsibleFor).map((arr) => arr.name),
  locations: getSpeciesByIds(...obj.responsibleFor).map((arr) => arr.location),
});

const getNull = () => data.employees.map((id) => getByName(checkName(id.id)));

function getEmployeesCoverage(byName) {
  let verificaId;
  if (!byName) return getNull();
  if (byName) verificaId = checkName(Object.values(byName)[0]);
  if (verificaId) return getByName(verificaId);

  throw new Error('Informações inválidas');
}

console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
