const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const visitors = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((people) => {
    if (people.age < 18) {
      visitors.child += 1;
    } else if (people.age >= 50) {
      visitors.senior += 1;
    } else {
      visitors.adult += 1;
    }
  });
  return visitors;
}

function calculateEntry(entrants = {}) {
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child: visitorChild, adult: visitorAdult, senior: visitorSenior } = countEntrants(entrants);
  const { child: priceChild, adult: priceAdult, senior: priceSenior } = data.prices;
  return priceChild * visitorChild + priceAdult * visitorAdult + priceSenior * visitorSenior;
}

module.exports = { calculateEntry, countEntrants };
