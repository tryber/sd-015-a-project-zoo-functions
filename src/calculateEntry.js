const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const people = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((person) => {
    if (person.age < 18) {
      people.child += 1;
    } else if (person.age >= 50) {
      people.senior += 1;
    } else {
      people.adult += 1;
    }
  });
  return people;
}

function calculateEntry(entrants = {}) {
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  console.log(countEntrants(entrants));
  const { child: numberChild, adult: numberAdult, senior: numberSenior } = countEntrants(entrants);
  const { child: priceChild, adult: priceAdult, senior: priceSenior } = data.prices;
  return priceChild * numberChild + priceAdult * numberAdult + priceSenior * numberSenior;
}

module.exports = { calculateEntry, countEntrants };
