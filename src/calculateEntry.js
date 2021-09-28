const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const idadeClasi = {
    child: entrants.filter((ch) => ch.age < 18).length,
    adult: entrants.filter((ad) => ad.age >= 18 && ad.age < 50).length,
    senior: entrants.filter((se) => se.age >= 50).length,
  };
  return idadeClasi;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const q = countEntrants(entrants);
  const total = ((q.child * prices.child) + (q.adult * prices.adult) + (q.senior * prices.senior));
  return total;
}

module.exports = { calculateEntry, countEntrants };
