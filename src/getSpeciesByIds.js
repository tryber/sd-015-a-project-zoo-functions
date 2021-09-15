const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  return species.filter((animais) => ids.includes(animais.id));
}
console.log(getSpeciesByIds('89be95b3-47e4-4c5b-b687-1fabf2afa274'));

module.exports = getSpeciesByIds;
