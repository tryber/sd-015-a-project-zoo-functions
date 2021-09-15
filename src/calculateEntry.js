const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countEntrants = (entrants) => ({
  child: entrants.filter((entrant) => entrant.age < 18).length,
  adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
  senior: entrants.filter((entrant) => entrant.age >= 50).length,
});

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return (countEntrants(entrants).child * prices.child)
   + (countEntrants(entrants).adult * prices.adult)
   + (countEntrants(entrants).senior * prices.senior);
};

module.exports = { calculateEntry, countEntrants };
