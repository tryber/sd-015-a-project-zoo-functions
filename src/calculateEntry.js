const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((element) => {
    if (element.age < 18) {
      child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  });
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  let price = 0;
  if (typeof entrants === 'object' && entrants.length > 0) {
    const x = countEntrants(entrants);
    const { adult } = x;
    const { child } = x;
    const { senior } = x;
    const { prices } = data;
    price = (prices.adult * adult) + (prices.child * child) + (prices.senior * senior);
  }
  return price;
}

module.exports = { calculateEntry, countEntrants };
