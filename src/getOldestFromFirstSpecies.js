const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const idEmploye = employees.find((emp) => emp.id === id).responsibleFor[0];
  const specie = species.find((spe) => spe.id === idEmploye);
  const oldEspecie = specie.residents.reduce((acc, cur) => (cur.age > acc.age ? cur : acc));
  return Object.values(oldEspecie);
}

module.exports = getOldestFromFirstSpecies;
