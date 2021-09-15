const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const people = {
    child: entrants.filter((idade) => idade.age < 18).length,
    adult: entrants.filter((idade) => idade.age >= 18 && idade.age < 50).length,
    senior: entrants.filter((idade) => idade.age >= 50).length,
  };
  return people;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  const arrayPeople = Object.entries(countEntrants(entrants));
  const valores = arrayPeople.reduce((acc, crr) => acc + prices[crr[0]] * crr[1], 0);
  return valores;
}

module.exports = { calculateEntry, countEntrants };
