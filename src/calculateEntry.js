const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || entrants.length === undefined) {
    console.log(entrants);
    return 0;
  }
  const adultPrice = countEntrants(entrants).adult * 49.99;
  const childPrice = countEntrants(entrants).child * 20.99;
  const seniorPrice = countEntrants(entrants).senior * 24.99;
  return adultPrice + childPrice + seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
