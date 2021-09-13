const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child1 = entrants.reduce((acc, cur) => ((cur.age < 18) ? acc + 1 : acc), 0);
  const adult1 = entrants.reduce((ac, cr) => ((cr.age >= 18) && (cr.age < 50) ? ac + 1 : ac), 0);
  const senior1 = entrants.reduce((acc, cur) => ((cur.age >= 50) ? acc + 1 : acc), 0);
  return { child: child1, adult: adult1, senior: senior1 };
}

const calculateEntry = (entrants = {}) => {
  if (Object.keys(entrants).length !== 0) {
    const a = countEntrants(entrants);
    const { child, adult, senior } = data.prices;
    return a.child * child + a.adult * adult + a.senior * senior;
  }
  return 0;
};

module.exports = { calculateEntry, countEntrants };
