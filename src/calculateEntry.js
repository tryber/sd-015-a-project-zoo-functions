const data = require('../data/zoo_data');

const { child: priceChild, adult: priceAdult, senior: priceSenior } = data.prices;

function countEntrants(entrants) {
  // seu código aqui
  const arrayEntants = { child: 0, adult: 0, senior: 0 };

  entrants.map((ages) => ages.age).forEach((element) => {
    if (element < 18) {
      arrayEntants.child += 1;
    }
    if (element >= 18 && element < 50) {
      arrayEntants.adult += 1;
    }
    if (element >= 50) {
      arrayEntants.senior += 1;
    }
  });
  return arrayEntants;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || !entrants.length) {
    return 0;
  }
  const { child: totalC, adult: totalA, senior: totalS } = countEntrants(entrants);
  const calculateChild = totalC * priceChild;
  const calculateAdult = totalA * priceAdult;
  const calculateSenior = totalS * priceSenior;
  const calculateTotal = calculateAdult + calculateChild + calculateSenior;
  return calculateTotal;
}

module.exports = { calculateEntry, countEntrants };
