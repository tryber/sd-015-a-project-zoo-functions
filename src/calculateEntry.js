const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const contChild = entrants.reduce((acc, cv) => ((cv.age < 18) ? acc + 1 : acc), 0);
  const contAdult = entrants.reduce((ac, cv) => ((cv.age >= 18) && (cv.age < 50) ? ac + 1 : ac), 0);
  const contSenior = entrants.reduce((acc, cv) => ((cv.age >= 50) ? acc + 1 : acc), 0);

  return { child: contChild,
    adult: contAdult,
    senior: contSenior,
  };
}

function calculateEntry(entrants = {}) {
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const countE = countEntrants(entrants);

  return ((countE.child * data.prices.child)
  + (countE.adult * data.prices.adult)
  + (countE.senior * data.prices.senior));
}

module.exports = { calculateEntry, countEntrants };
