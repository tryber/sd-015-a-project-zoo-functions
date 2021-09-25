const { species, employees } = require('../data/zoo_data');

const findEmployee = (person) => {
  if (person.name) {
    return employees.find((a) =>
      a.firstName === person.name || a.lastName === person.name);
  }

  if (person.id) {
    return employees.find((a) =>
      person.id === a.id);
  }
};

const standardObj = (obj) => ({

  id: obj.id,
  fullName: `${obj.firstName} ${obj.lastName}`,
  species: species.filter((specie) => obj.responsibleFor
    .includes(specie.id)).map((anim) => anim.name),
  locations: species.filter((specie) => obj.responsibleFor
    .includes(specie.id)).map((anim) => anim.location),

});

function getEmployeesCoverage(person) {
  if (!person) {
    return employees.map((a) => standardObj(a));
  }
  if (!findEmployee(person)) throw new Error('Informações inválidas');
  return standardObj(findEmployee(person));
}

module.exports = getEmployeesCoverage;
