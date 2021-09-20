const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function defaultt() {
  const resultado = employees.map((H) => ({
    id: H.id,
    fullName: `${H.firstName} ${H.lastName}`,
    species: H.responsibleFor.map((F) => species.find((E) => E.id === F).name),
    locations: H.responsibleFor.map((F) => species.find((E) => E.id === F).location),
  }));
  return resultado;
}
function getEmployeesCoverage(H) {
  if (!H) {
    return defaultt();
  }
  const { id, name } = H;
  if (employees.find((F) => (F.firstName === name || F.lastName === name || F.id === id))) {
  const ob = employees.find((E) => (E.firstName === name || E.lastName === name || E.id === id))
      return {
        id: ob.id,
        fullName: `${ob.firstName} ${ob.lastName}`,
        species: ob.responsibleFor.map((F) => species.find((E) => E.id === F).name),
        locations: ob.responsibleFor.map((F) => species.find((E) => E.id === F).location),
      };
    }
    throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
