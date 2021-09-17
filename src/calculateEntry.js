const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((person) => person.age < 18).length,
    adult: entrants.filter((person) => person.age >= 18 && person.age < 50).length,
    senior: entrants.filter((person) => person.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  const { prices: { adult: adultPrice, senior: seniorPrice, child: childPrice}} = data;
  console.log(`adult:${adultPrice}, senior:${seniorPrice}, child:${childPrice}`);
}

module.exports = { calculateEntry, countEntrants };
