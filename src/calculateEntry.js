const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = { adult: 0, child: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      obj.child += 1;
    } else if (element.age < 50) {
      obj.adult += 1;
    } else {
      obj.senior += 1;
    }
  });
  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) return 0;
  const people = countEntrants(entrants);
  const adult = (people.adult) * data.prices.adult;
  const senior = (people.senior) * data.prices.senior;
  const child = (people.child) * data.prices.child;

  return adult + senior + child;
}

module.exports = { calculateEntry, countEntrants };
