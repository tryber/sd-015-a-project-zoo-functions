const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const people = {
    child: entrants.filter((person) => person.age < 18).length,
    adult: entrants.filter((person) => person.age >= 18 && person.age < 50).length,
    senior: entrants.filter((person) => person.age >= 50).length,
  };
  return people;
}

/** Source: https://coderwall.com/p/_g3x9q/how-to-check-if-javascript-object-is-empty */
function isEmpty(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) { return false; }
  }
  return true;
}

function calculateEntry(entrants) {
  if (isEmpty(entrants) || entrants === undefined) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return child * data.prices.child + adult * data.prices.adult + senior * data.prices.senior;
}

module.exports = { calculateEntry, countEntrants };
