const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0; let adult = 0; let senior = 0;
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      child += 1;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      adult += 1;
    }
    if (entrant.age >= 50) {
      senior += 1;
    }
  });
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined
    || (typeof (entrants) === 'object' && Array.isArray(entrants) === false)) {
    return 0;
  }
  const listOfPeople = countEntrants(entrants);
  return listOfPeople.child * data.prices.child + listOfPeople.adult * data.prices.adult
  + listOfPeople.senior * data.prices.senior;
}

module.exports = { calculateEntry, countEntrants };
