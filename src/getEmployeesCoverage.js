const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function novosDados() {
  return employees.map((elem) => ({
    id: elem.id,
    fullName: `${elem.firstName} ${elem.lastName}`,
    species: elem.responsibleFor.map((elemen) => species.find((elemen2) => elemen2.id === elemen)
      .name),
    locations: elem.responsibleFor.map((elemen) => species.find((elemen2) => elemen2.id === elemen)
      .location),
  }));
}

function getEmployeesCoverage(arg) {
  if (!arg) {
    return novosDados();
  }
  const { id, name } = arg;

  if (employees.find((g) => (g.firstName === name || g.lastName === name || g.id === id))) {
    const ray = employees.find((g) => (g.firstName === name || g.lastName === name || g.id === id));
    return {
      id: ray.id,
      fullName: `${ray.firstName} ${ray.lastName}`,
      species: ray.responsibleFor.map((e) => species.find((ele2) => ele2.id === e)
        .name),
      locations: ray.responsibleFor.map((e) => species.find((ele2) => ele2.id === e)
        .location),
    };
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
