const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const base = employees.reduce((acc, actual) => {
  acc.push({
    id: actual.id,
    fullName: `${actual.firstName} ${actual.lastName}`,
    species: species.filter((specie) =>
      actual.responsibleFor.includes(specie.id)).map((speSelec) => speSelec.name),
    locations: species.filter((specie) =>
      actual.responsibleFor.includes(specie.id)).map((speSelec2) => speSelec2.location),
  });
  return acc;
}, []);

console.log(base);

function getEmployeesCoverage(obj) {
  if (!obj) return base;
  const { name, id } = obj;
  if (base.find((emp) => emp.id === id)) return base.find((emp) => emp.id === id);
  if (base.find((emp) => emp.fullName.includes(name))) {
    return base.find((emp) => emp.fullName.includes(name));
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
