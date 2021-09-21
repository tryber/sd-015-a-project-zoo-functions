const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const people = {
    child: entrants.filter((person) => person.age < 18).length,
    adult: entrants.filter((person) => person.age >= 18 && person.age < 50).length,
    senior: entrants.filter((person) => person.age >= 50).length,
  };
  return people;
}

/** Source: https://www.samanthaming.com/tidbits/94-how-to-check-if-object-is-empty/ */
function isObjectEmpty(value) {
  return (
    Object.prototype.toString.call(value) === '[object Object]'
    && JSON.stringify(value) === '{}'
  );
}

function calculateEntry(entrants) {
  if (isObjectEmpty(entrants) || entrants === undefined) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return child * data.prices.child + adult * data.prices.adult + senior * data.prices.senior;
}

module.exports = { calculateEntry, countEntrants };
