const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childs = entrants.filter((entrante) => entrante.age < 18).length;
  const adults = entrants.filter((entrante) => entrante.age >= 18 && entrante.age < 50).length;
  const seniors = entrants.filter((entrante) => entrante.age >= 50).length;
  return {
    child: childs,
    adult: adults,
    senior: seniors,
  };
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  if (Object.values(entrants).length === 0) {
    return 0;
  }
  const listEntrants = countEntrants(entrants);
  return listEntrants.adult * data.prices.adult
   + listEntrants.child * data.prices.child + listEntrants.senior * data.prices.senior;
}

module.exports = { calculateEntry, countEntrants };
