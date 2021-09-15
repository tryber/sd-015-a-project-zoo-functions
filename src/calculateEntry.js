const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  if (!Array.isArray(entrants)) return [];

  return entrants.reduce(
    (acc, { age }) => {
      if (age < 18) acc.child += 1;
      else if (age < 50) acc.adult += 1;
      else acc.senior += 1;

      return acc;
    },
    { child: 0, adult: 0, senior: 0 },
  );
};

const calculateEntry = (entrants) =>
  Object.entries(countEntrants(entrants))
    .reduce((acc, entrant, index) =>
      acc + entrant[1] * prices[entrant[0]], 0);

module.exports = { calculateEntry, countEntrants };
