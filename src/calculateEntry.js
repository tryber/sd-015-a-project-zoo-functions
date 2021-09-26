const data = require('../data/zoo_data');

function isEmpty(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return true;
  }
}

function countEntrants(entrants) {
  // seu código aqui
  const children = entrants.filter((person) => person.age < 18);
  const adults = entrants.filter((person) => person.age >= 18 && person.age < 50);
  const seniors = entrants.filter((person) => person.age >= 50);
  return {
    child: children.length,
    adult: adults.length,
    senior: seniors.length,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (isEmpty(entrants)) {
    return 0;
  }
  const numberOfEntrants = countEntrants(entrants);
  const childrenPrice = 20.99 * numberOfEntrants.child;
  const adultsPrice = 49.99 * numberOfEntrants.adult;
  const seniorsPrice = 24.99 * numberOfEntrants.senior;
  return childrenPrice + adultsPrice + seniorsPrice;
}

module.exports = { calculateEntry, countEntrants };
