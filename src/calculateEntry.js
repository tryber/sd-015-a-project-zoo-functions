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

// eslint-disable-next-line sonarjs/cognitive-complexity
function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === undefined) return 0;
  let price = 0;
  entrants.forEach((person) => {
    if (person.age < 18) price += 20.99;
    else if (person.age === 18 && person.age < 50) price += 49.99;
    else price += 24.99;
  });

  return Number.parseFloat(price.toFixed(2));
}
module.exports = { calculateEntry, countEntrants };
