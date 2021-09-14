const data = require('../data/zoo_data');

function countChild(entrants) {
  return entrants.reduce((count, entrant) => {
    let cC = count;
    if (entrant.age < 18) {
      cC += 1;
    }
    return cC;
  }, 0);
}

function countAdult(entrants) {
  return entrants.reduce((count, entrant) => {
    let cA = count;
    if (entrant.age >= 18 && entrant.age < 50) {
      cA += 1;
    }
    return cA;
  }, 0);
}

function countSenior(entrants) {
  return entrants.reduce((count, entrant) => {
    let cS = count;
    if (entrant.age >= 50) {
      cS += 1;
    }
    return cS;
  }, 0);
}

function countEntrants(entrants) {
  return {
    child: countChild(entrants),
    adult: countAdult(entrants),
    senior: countSenior(entrants),
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const nPeople = countEntrants(entrants);
  return nPeople.child * 20.99 + nPeople.adult * 49.99 + nPeople.senior * 24.99;
}

module.exports = { calculateEntry, countEntrants };
