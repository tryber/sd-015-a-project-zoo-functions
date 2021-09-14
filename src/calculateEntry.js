const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === undefined) {
    return 0;
  }
  const adultEntry = countEntrants(entrants).adult * 49.99;
  const childEntry = countEntrants(entrants).child * 20.99;
  const seniorEntry = countEntrants(entrants).senior * 24.99;
  return adultEntry + childEntry + seniorEntry;
}

module.exports = { calculateEntry, countEntrants };
