const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants.length === undefined) {
    return 0;
  }
  const people = countEntrants(entrants);
  return (people.child * 20.99) + (people.adult * 49.99) + (people.senior * 24.99);
}

module.exports = { calculateEntry, countEntrants };