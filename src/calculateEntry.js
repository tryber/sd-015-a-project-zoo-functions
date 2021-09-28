const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const visitors = { child: 0, adult: 0, senior: 0 };
  visitors.child = entrants.filter((visitor) => visitor.age < 18).length;
  visitors.senior = entrants.filter((visitor) => visitor.age >= 50).length;
  visitors.adult = entrants.filter((visitor) => visitor.age >= 18 && visitor.age < 50).length;
  return visitors;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitors = { child: 0, adult: 0, senior: 0 };
  visitors.child = entrants.filter((visitor) => visitor.age < 18).length;
  visitors.senior = entrants.filter((visitor) => visitor.age >= 50).length;
  visitors.adult = entrants.filter((visitor) => visitor.age >= 18 && visitor.age < 50).length;

  const childPrice = visitors.child * prices.child;
  const adultPrice = visitors.adult * prices.adult;
  const seniorPrice = visitors.senior * prices.senior;

  const totalEntry = childPrice + adultPrice + seniorPrice;
  return totalEntry;
}

module.exports = { calculateEntry, countEntrants };
