// const en = require('faker/lib/locales/en');

const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  return {
    child: entrants.filter((element) => element.age < 18).length,
    adult: entrants.filter((element) => element.age >= 18 && element.age < 50).length,
    senior: entrants.filter((element) => element.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0; {
    const person = countEntrants(entrants);
    const countChild = person.child * prices.child;
    const countAdult = person.adult * prices.adult;
    const countSenior = person.senior * prices.senior;
    const total = (countChild) + (countAdult) + (countSenior);
    return total;
  }
}

module.exports = { calculateEntry, countEntrants };
