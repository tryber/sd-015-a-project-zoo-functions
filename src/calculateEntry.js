const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) {
    return 0;
  }
  const getAges = entrants.map((element) => element.age);
  return ({
    child: getAges.filter((child) => child < 18).length,
    adult: getAges.filter((adult) => adult >= 18 && adult < 50).length,
    senior: getAges.filter((senior) => senior >= 50).length,
  });
};

const calculateEntry = (entrants) => {
  const getEntrants = countEntrants(entrants);
  return Object.keys(getEntrants).reduce(((acc, curr) =>
    acc + getEntrants[curr] * prices[curr]), 0);
};

module.exports = { calculateEntry, countEntrants };
