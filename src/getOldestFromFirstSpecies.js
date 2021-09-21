const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const search = [];
  const oneEmployee = data.employees.find((employee) => employee.id === id);
  const firstSpecie = data.species.find((specie) => specie.id === oneEmployee.responsibleFor[0]);
  const oldest = firstSpecie.residents.reduce((older, younger) => {
    if (older.age > younger.age) {
      return older;
    }
    return younger;
  });
  search.push(oldest.name, oldest.sex, oldest.age);
  return search;
}

module.exports = getOldestFromFirstSpecies;
