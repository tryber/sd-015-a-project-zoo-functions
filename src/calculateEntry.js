const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((element) => element.age < 18);
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const senior = entrants.filter((element) => element.age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length <= 0) return 0;
  const entrant = countEntrants(entrants);
  const child = 20.99 * (entrant.child);
  const adult = 49.99 * (entrant.adult);
  const senior = 24.99 * (entrant.senior);
  return child + adult + senior;
}

module.exports = { calculateEntry, countEntrants };
