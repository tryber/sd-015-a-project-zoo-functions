const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const under18 = entrants.filter((ent) => ent.age < 18).length;
  const adNormal = entrants.filter((ent) => ent.age >= 18 && ent.age < 50).length;
  const old = entrants.filter((ent) => ent.age >= 50).length;
  return {
    child: under18,
    adult: adNormal,
    senior: old,
  };
}

function calculateEntry(entrants = {}) {
  // seu código aqui
  if (!Object.keys(entrants).length) return 0;
  const funcOne = countEntrants(entrants);
  const { child, adult, senior } = funcOne;
  const sum = (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
  return sum;
}

module.exports = { calculateEntry, countEntrants };
