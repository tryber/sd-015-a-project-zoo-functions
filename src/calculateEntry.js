const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const personObject = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((person) => {
    if (person.age < 18) personObject.child += 1;
    else if (person.age === 18 && person.age < 50) personObject.adult += 1;
    else personObject.senior += 1;
  });
  return personObject;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === undefined) return 0;
  const numberOfKids = entrants.filter((person) => person.age < 18).length;
  const numberOfAdults = entrants.filter((person) => person.age === 18 && person.age < 50).length;
  const numberOfSenior = entrants.filter((person) => person.age === 50 || person.age > 50).length;
  return (
    (data.prices.child * numberOfKids)
    + (data.prices.adult * numberOfAdults)
    + (data.prices.senior * numberOfSenior)
  );
}

module.exports = { calculateEntry, countEntrants };
