const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Requisito concluido com base no raciocínio de Lygia Dias;

const pplempl = (employ) => {
  if (employ.name) {
    return employees.find((p) =>
      p.firstName === employ.name || p.lastName === employ.name);
  }

  if (employ.id) {
    return employees.find((p) =>
      employ.id === p.id);
  }
};

const mkobj = (obj) => ({

  id: obj.id,
  fullName: `${obj.firstName} ${obj.lastName}`,
  species: species.filter((s) => obj.responsibleFor
    .includes(s.id)).map((animal) => animal.name),
  locations: species.filter((s) => obj.responsibleFor
    .includes(s.id)).map((animal) => animal.location),
});

function getEmployeesCoverage(e) {
  if (!e) {
    return employees.map((p) => mkobj(p));
  }
  if (!pplempl(e)) throw new Error('Informações inválidas');
  return mkobj(pplempl(e));
}

module.exports = getEmployeesCoverage;
