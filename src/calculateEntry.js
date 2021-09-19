const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((pessoa) => pessoa.age < 18).length;
  const adult = entrants.filter((pessoa) => pessoa.age >= 18 && pessoa.age < 50).length;
  const senior = entrants.filter((pessoa) => pessoa.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants.length === undefined) {
    return 0;
  }
  const publico = countEntrants(entrants);
  return (publico.child * 20.99) + (publico.adult * 49.99) + (publico.senior * 24.99);
}

module.exports = { calculateEntry, countEntrants };
