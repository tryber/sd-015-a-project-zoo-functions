const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) {
    return 0;
  }
  const ages = entrants.map((elem) => elem.age);
  return ({
    child: ages.filter((child) => child < 18).length,
    adult: ages.filter((adult) => adult >= 18 && adult < 50).length,
    senior: ages.filter((senior) => senior >= 50).length,
  });
};

const calculateEntry = (entrants) => {
  const obj = countEntrants(entrants);
  return Object.keys(obj)
    .reduce(((x, y) => x + obj[y] * prices[y]), 0);
};

module.exports = { calculateEntry, countEntrants };
