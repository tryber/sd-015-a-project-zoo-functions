const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const agesEntrants = entrants.map((entrant) => entrant.age);
  const obj = { child: 0, adult: 0, senior: 0 };
  agesEntrants.forEach((age) => {
    if (age < 18) {
      obj.child += 1;
      return;
    }
    if (age < 50) {
      obj.adult += 1;
      return;
    }
    obj.senior += 1;
  });
  return obj;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  return child * data.prices.child + adult * data.prices.adult + senior * data.prices.senior;
}

module.exports = { calculateEntry, countEntrants };
