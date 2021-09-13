const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const total = data.species.filter((element) => ids.includes(element.id));
  return total;
};

console.log(getSpeciesByIds('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));
module.exports = getSpeciesByIds;
