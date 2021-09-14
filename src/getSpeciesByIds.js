// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((animal) => ids.includes(animal.id));
}

console.log(getSpeciesByIds(lionId));

module.exports = getSpeciesByIds;
