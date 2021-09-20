const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { child, adult, senior} = prices

function countEntrants(entrants) {
  const childAge = entrants.filter((x) => x.age < 18);
  const adultAge = entrants.filter((y) => y.age >= 18 && y.age < 50);
  const seniorAge = entrants.filter((z) => z.age >= 50);
  return { adult: adultAge.length, child: childAge.length, senior: seniorAge.length };
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  let value = countEntrants(entrants);
  let sum = value.child * child + value.adult * adult + value.senior * senior;
  return sum;
}

module.exports = { calculateEntry, countEntrants };
