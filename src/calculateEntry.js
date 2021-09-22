const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childCount = entrants.filter((element) => element.age < 18).length;
  const adultCount = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const seniorCount = entrants.filter((element) => element.age >= 50).length;
  return { child: childCount, adult: adultCount, senior: seniorCount };
}
function calculateEntry(entrants2) {
  if (!entrants2 || !entrants2.length) return 0;
  const { child, adult, senior } = countEntrants(entrants2);
  return child * 20.99 + adult * 49.99 + senior * 24.99;
}
// console.log(calculateEntry([
//   { name: 'Magno', age: 5 },
//   { name: 'Leandro', age: 50 },
// ]));
// console.log(calculateEntry({}));
module.exports = { calculateEntry, countEntrants };
