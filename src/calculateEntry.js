const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((person) => person.age < 18).length,
    adult: entrants.filter((person) => person.age >= 18 && person.age < 50)
      .length,
    senior: entrants.filter((person) => person.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const { prices: { adult: adultPrice, senior: seniorPrice, child: childPrice } } = data;
  const { child: childCnt, adult: adultCnt, senior: seniorCnt } = countEntrants(entrants);
  return childCnt * childPrice + adultCnt * adultPrice + seniorCnt * seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
