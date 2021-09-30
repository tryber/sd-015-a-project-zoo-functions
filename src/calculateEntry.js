const data = require('../data/zoo_data');

function separeteByAge(entrants, maxAge, minAge) {
  return entrants.filter((person) => person.age < maxAge && person.age >= minAge).length;
}

function countEntrants(entrants) {
  const childAdultOrSenior = {
    child: separeteByAge(entrants, 18, 0),
    adult: separeteByAge(entrants, 50, 18),
    senior: separeteByAge(entrants, 200, 50),
  };
  return childAdultOrSenior;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) return 0;
  const getEntrants = countEntrants(entrants);
  const priceToPay = ((getEntrants.child * data.prices.child)
    + (getEntrants.adult * data.prices.adult)
    + (getEntrants.senior * data.prices.senior));
  return priceToPay;
}

module.exports = { calculateEntry, countEntrants };
