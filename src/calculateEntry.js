const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((person) => {
    if (person.age < 18) {
      obj.child += 1;
    } else if (person.age >= 18 && person.age < 50) {
      obj.adult += 1;
    } else if (person.age >= 50) {
      obj.senior += 1;
    }
  });
  return obj;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (!Object.keys(entrants).length) return 0;
  const listOfGuests = countEntrants(entrants);
  let total = 0;

  total += (listOfGuests.child * data.prices.child);
  total += (listOfGuests.adult * data.prices.adult);
  total += (listOfGuests.senior * data.prices.senior);
  return total;
}

module.exports = { calculateEntry, countEntrants };
