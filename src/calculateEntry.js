const { prices } = require('../data/zoo_data');

const countEntrants = (entrants = []) => {
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

const calculateEntry = (entrants) => {
  let totalPrice = 0;
  Object.entries(countEntrants(entrants)).forEach((entrant) => {
    Object.entries(prices).forEach((price) => {
      if (price[0] === entrant[0]) totalPrice += price[1] * entrant[1];
    });
  });

  return totalPrice;
};

module.exports = { calculateEntry, countEntrants };
