const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function fazendo() {
  return data.employees.map((elemento) => ({
    id: elemento.id,
    fullName: `${elemento.firstName} ${elemento.lastName}`,
    species: elemento.responsibleFor.map((elementod) => species.find((elementot) => elementot
      .id === elementod).name),
    locations: elemento.responsibleFor.map((elementod) => species.find((elementot) => elementot
      .id === elementod).location),
  }));
}

function getEmployeesCoverage(esperando) {
  if (!esperando) {
    return fazendo();
  }
  const { id, name } = esperando;
  if (employees.find((ach) => (ach.firstName === name || ach.lastName === name || ach.id === id))) {
    const objeto = employees.find((ach) => (ach.firstName === name || ach.lastName === name || ach
      .id === id));
    return {
      id: objeto.id,
      fullName: `${objeto.firstName} ${objeto.lastName}`,
      species: objeto.responsibleFor.map((elemento) => species.find((elementod) => elementod
        .id === elemento).name),
      locations: objeto.responsibleFor.map((elemento) => species.find((elementod) => elementod
        .id === elemento).location),
    };
  }
  throw new Error('Informações inválidas');
  // seu código aqui
}
console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

module.exports = getEmployeesCoverage;
// coleguinha luan me deu esse help para execucao desta!
