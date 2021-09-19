const data = require('../data/zoo_data');
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
function countEntrants(entrants) {
  const obj = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((e) => {
    if (e.age < 18) obj.child += 1;
    if (e.age >= 18 && e.age < 50) obj.adult += 1;
    if (e.age >= 50) obj.senior += 1;
  });
  return obj;
}

const { prices } = data;

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { adult, senior, child } = countEntrants(entrants);
  const sum = ((adult * prices.adult) + (child * prices.child) + (senior * prices.senior));
  return sum;
}
console.log({});
module.exports = { calculateEntry, countEntrants };
