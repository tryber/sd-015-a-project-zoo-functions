const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const retorno = {};
  const children = entrants.filter((a) => a.age < 18);
  retorno.child = children.length;
  const adults = entrants.filter((b) => b.age >= 18 && b.age < 50);
  retorno.adult = adults.length;
  const seniors = entrants.filter((c) => c.age >= 50);
  retorno.senior = seniors.length;
  return retorno;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) return 0;
  let entry = 0;
  const people = countEntrants(entrants);
  if (people === {}) {
    return 0;
  }
  entry += people.child * data.prices.child;
  entry += people.adult * data.prices.adult;
  entry += people.senior * data.prices.senior;
  return entry;
}

module.exports = { calculateEntry, countEntrants };
