const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  return entrants.reduce((res, cont) => {
    if (cont.age < 18) {
      res.child += 1;
    }
    if (cont.age >= 18 && cont.age < 50) {
      res.adult += 1;
    }
    if (cont.age >= 50) {
      res.senior += 1;
    }
    return res;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { // converte obj em array sendo possivel contar com o length
    return 0;
  }
  const count = countEntrants(entrants);
  const priceChild = count.child * prices.child;
  const priceAdult = count.adult * prices.adult;
  const priceSenior = count.senior * prices.senior;
  return priceChild + priceAdult + priceSenior;
}

module.exports = { calculateEntry, countEntrants };
