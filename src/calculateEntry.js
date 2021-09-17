const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((element) => {
    if (element.age < 18) {
      child += 1;
    }
    if (element.age >= 18 && element.age < 50) {
      adult += 1;
    }
    if (element.age >= 50) {
      senior += 1;
    }
  });
  return { adult, child, senior };
}

function calculateEntry(entrants) {
  if (!entrants || !entrants.length) {
    return 0;
  }
  let { child, adult, senior } = countEntrants(entrants);
  const { prices } = data;
  child *= prices.child;
  adult *= prices.adult;
  senior *= prices.senior;
  const total = (child + adult + senior);
  return total;
}

module.exports = { calculateEntry, countEntrants };
