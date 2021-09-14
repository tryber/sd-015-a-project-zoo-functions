const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countEntrants = (entrants) =>  ({
  child: entrants.filter((find) => find.age < 18).length,
  adult: entrants.filter((find) => find.age >= 18 && find.age < 50).length,
  senior: entrants.filter((find) => find.age >= 50).length,
  // seu código aqui
});


const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return (countEntrants(entrants).child * prices.child)+
  (countEntrants(entrants).adult* prices.adult)+
  (countEntrants(entrants).senior * prices.senior);
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
