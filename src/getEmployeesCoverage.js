const data = require('../data/zoo_data');

const getName = (employeeName) => data.employees.find((name) =>
  name.firstName === employeeName
  || name.lastName === employeeName
  || name.id === employeeName);

const getAnimalId = (animaId) => data.species.filter((animal) => animaId
  .find((primeiro) => animal.id === primeiro));

const getByName = (obj) => ({
  id: `${obj.id}`,
  fullName: `${obj.firstName} ${obj.lastName}`,
  species: getAnimalId(obj.responsibleFor).map((arr) => arr.name),
  locations: getAnimalId(obj.responsibleFor).map((arr) => arr.location),
});

const getNull = () => data.employees.map((id) => getByName(getName(id.id)));

function getEmployeesCoverage(byName) {
  let verificaId;
  if (!byName) return getNull();
  if (byName) verificaId = getName(Object.values(byName)[0]);
  if (verificaId) return getByName(verificaId);

  throw new Error('Informações inválidas');
}

console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
