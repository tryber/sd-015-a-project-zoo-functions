const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let childCounter = 0;
  let adultCounter = 0;
  let seniorCounter = 0;

  entrants.forEach(({ age }) => {
    if (age < 18) childCounter += 1;
    else if (age < 50) adultCounter += 1;
    else seniorCounter += 1;
  });
  return {
    adult: adultCounter,
    child: childCounter,
    senior: seniorCounter,
  };
}

function calculateEntry(entrants) {
  if (!entrants || !entrants.length) return 0;

  let { adult, child, senior } = countEntrants(entrants);
  const { prices } = data;

  adult *= prices.adult;
  child *= prices.child;
  senior *= prices.senior;

  const totalPrice = adult + child + senior;

  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
