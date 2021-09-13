const data = require('../data/zoo_data');

const ent = [
  { name: 'aaaa', age: 5 },
  { name: 'aaaa', age: 5 },
  { name: 'aaaa', age: 5 },
  { name: 'aaaa', age: 18 },
  { name: 'aaaa', age: 18 },
  { name: 'aaaa', age: 50 },
];

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;

  entrants.forEach(({ age }) => {

    if (age < 18) {
      child += 1;
      return;
    }
    if (age < 50) {
      adult += 1;
      return;
    }
    senior += 1;
  });
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || !entrants.length) return 0;

  let { child, adult, senior } = countEntrants(entrants);
  const { prices } = data;
  child *= prices.child;
  adult *= prices.adult;
  senior *= prices.senior;
  const totalPrice = child + adult + senior;

  return totalPrice;
}

console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
