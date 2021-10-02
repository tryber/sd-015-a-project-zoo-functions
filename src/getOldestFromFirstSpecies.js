const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(idss) {
  const laborer = data.employees.find((e) => e.id === idss);
  const currAnimal = data.species.find((animal) => animal.id === laborer.responsibleFor[0]);
  const div = currAnimal.residents.sort((a1, a2) => {
    if (a1.age > a2.age) return 1;
    if (a1.age < a2.age) return -1;
    return 0;
  });
  const oldest = div[div.length - 1];
  const done = [oldest.name, oldest.sex, oldest.age];
  return done;
}
module.exports = getOldestFromFirstSpecies;
