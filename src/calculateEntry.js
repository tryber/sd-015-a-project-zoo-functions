const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const obj = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((e) => {
    if (e.age < 18) {
      obj.child += 1;
    } else if (e.age >= 18 && e.age < 50) {
      obj.adult += 1;
    } else if (e.age >= 50) {
      obj.senior += 1;
    }
  });
  return obj;
}

function calculateEntry(entrants = {}) {
  if (!Object.keys(entrants).length) return 0;
  const people = Object.entries(countEntrants(entrants));
  let res = 0;
  people.forEach((e) => {
    res += prices[e[0]] * e[1];
  });
  return res;
}

module.exports = { calculateEntry, countEntrants };
