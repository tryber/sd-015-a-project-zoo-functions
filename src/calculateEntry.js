const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const child1 = entrants.filter((idade) => idade.age < 18).length;
  const adult1 = entrants.filter(
    (idade) => idade.age >= 18 && idade.age < 50,
  ).length;
  const senior1 = entrants.filter((idade) => idade.age >= 50).length;
  return {
    child: child1,
    adult: adult1,
    senior: senior1,
  };
}
// console.log(countEntrants({ name: 'Lalala', age: 17 }, { name: 'Xalala', age: 53 }));
function calculateEntry(entrants = {}) {
  // seu código aqui
  if (!Object.keys(entrants).length) { // array. length = 0 -> false.
    return 0;
  }
  const childValue = countEntrants(entrants).child * prices.child;
  const adultValue = countEntrants(entrants).adult * prices.adult;
  const seniorValue = countEntrants(entrants).senior * prices.senior;
  const totalValue = childValue + adultValue + seniorValue;
  return totalValue;
}

module.exports = { calculateEntry, countEntrants };
