const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function defaultt() {
  const resultado = employees.map((elemento) => ({
    id: elemento.id,
    fullName: `${elemento.firstName} ${elemento.lastName}`,
    species: elemento.responsibleFor.map((elemento2) => species.find((elemento3) => elemento3.id === elemento2).name),
    locations: elemento.responsibleFor.map((elemento2) => species.find((elemento3) => elemento3.id === elemento2).location),
  }))
  return resultado
}
function getEmployeesCoverage(parametro) {
  if (!parametro) {
    return defaultt();
  }
  const {id, name} = parametro;
  if (employees.find((parametro2) => (parametro2.firstName === name || parametro2.lastName === name || parametro2.id === id))) {
  const objeto = employees.find((parametro3) => (parametro3.firstName === name || parametro3.lastName === name || parametro3.id === id))
  return {
    id: objeto.id,
    fullName: `${objeto.firstName} ${objeto.lastName}`,
    species: objeto.responsibleFor.map((elemento2) => species.find((elemento3) => elemento3.id === elemento2).name),
    locations: objeto.responsibleFor.map((elemento2) => species.find((elemento3) => elemento3.id === elemento2).location),
  };
}
throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
