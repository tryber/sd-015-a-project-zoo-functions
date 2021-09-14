const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, entrant) => {
    const entrantCount = acc;
    if (entrant.age < 18) {
      entrantCount.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      entrantCount.adult += 1;
    } else {
      entrantCount.senior += 1;
    }
    return entrantCount;
    //
  }, { child: 0, adult: 0, senior: 0 });
}
function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const { adult: adultPrice, senior: seniorPrice, child: childPrice } = data.prices;

  const totalToPaid = (child * childPrice) + (senior * seniorPrice) + (adult * adultPrice);
  return totalToPaid;
}
module.exports = { calculateEntry, countEntrants };
