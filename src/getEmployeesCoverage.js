const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function novosDados() {
  return employees.map((elemento) => ({
    id: elemento.id,
    fullName: `${elemento.firstName} ${elemento.lastName}`,
    species: elemento.responsibleFor.map((elemen) => species.find((elemen2) => elemen2.id === elemen)
      .name),
    locations: elemento.responsibleFor.map((elemen) => species.find((elemen2) => elemen2.id === elemen)
      .location),
  }));
}

function getEmployeesCoverage(arg) {
  if (!arg) {
    return novosDados();
  }
  const { id, name } = arg;

  if (employees.find((rg) => (rg.firstName === name || rg.lastName === name || rg.id === id))) {
    const ray = employees.find((rg) => (rg.firstName === name || rg.lastName === name || rg.id === id));
    return {
      id: ray.id,
      fullName: `${ray.firstName} ${ray.lastName}`,
      species: ray.responsibleFor.map((ele) => species.find((ele2) => ele2.id === ele)
        .name),
      locations: ray.responsibleFor.map((ele) => species.find((ele2) => ele2.id === ele)
        .location),
    };
  }
  throw new Error('Informações inválidas');
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
