const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((element) => element.age < 18);
  const adult = entrants.filter((element) => element.age >= 18 && element.age <= 49);
  const senior = entrants.filter((element) => element.age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitantes = countEntrants(entrants);
  const valorChild = visitantes.child * 20.99;
  const valorAdult = visitantes.adult * 49.99;
  const valorSenior = visitantes.senior * 24.99;
  const total = valorChild + valorAdult + valorSenior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
