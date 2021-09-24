const { employees, species } = require('../data/zoo_data');

const oneemployeer = (employ) => ({
  id: employ.id,
  fullName: `${employ.firstName} ${employ.lastName}`,
  species: employ.responsibleFor.map((animal) => species.find((spec) => spec.id === animal).name),
  locations: employ.responsibleFor.map((animal) => species
    .find((spec) => spec.id === animal).location),
});

const everyBody = () =>
  employees.map((emplo) => ({
    id: emplo.id,
    fullName: `${emplo.firstName} ${emplo.lastName}`,
    species: emplo.responsibleFor.map((anim) => species.find((spec) => spec.id === anim).name),
    locations: emplo.responsibleFor.map((anim) => species
      .find((spec) => spec.id === anim).location),
  }));

function getEmployeesCoverage(nameOrid) {
  // seu código aqui
  if (!nameOrid) return everyBody();

  const { name, id } = nameOrid;
  const employeer = employees
    .find((info) => info.id === id || info.firstName === name || info.lastName === name);

  if (!employeer) throw new Error('Informações inválidas');

  return oneemployeer(employeer);
}

module.exports = getEmployeesCoverage;
