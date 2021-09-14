const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employees = data.employees.find((item) => item.id === id);
  const specie = employees.responsibleFor.find((item) => item[0]);
  const animals = data.species.find((item) => item.id === specie);
  const oldAnimal = animals.residents.reduce((acc, cur) => {
    if (acc.age > cur.age) return acc;
    return cur;
  });
  return Object.values(oldAnimal);
}

module.exports = getOldestFromFirstSpecies;
