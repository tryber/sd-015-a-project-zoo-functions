const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((person) => person.age < 18).length,
    adult: entrants.filter((person) => person.age >= 18 && person.age < 50).length,
    senior: entrants.filter((person) => person.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  // https://pt.stackoverflow.com/questions/83588/em-javascript-como-verificar-que-um-objeto-est%C3%A1-vazio-sem-jquery
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entrantsObj = countEntrants(entrants);
  const childsSum = entrantsObj.child * data.prices.child;
  const adultSum = entrantsObj.adult * data.prices.adult;
  const seniorSum = entrantsObj.senior * data.prices.senior;
  return childsSum + adultSum + seniorSum;
}

module.exports = { calculateEntry, countEntrants };
