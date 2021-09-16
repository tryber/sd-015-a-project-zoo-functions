const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = { child: 0, adult: 0, senior: 0 };
  const countPeople = (person) => {
    if (person.age < 18) {
      result.child += 1;
    } else if (person.age >= 18 && person.age < 50) {
      result.adult += 1;
    } else {
      result.senior += 1;
    }
  };
  entrants.forEach(countPeople);
  return result;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const person = countEntrants(entrants);
  const child = person.child * data.prices.child;
  const adult = person.adult * data.prices.adult;
  const senior = person.senior * data.prices.senior;
  return child + adult + senior;
}

module.exports = { calculateEntry, countEntrants };
