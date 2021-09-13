const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// console.log(data.species[2].name);

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  return species.filter((animais, index) => animais.id === ids[index]);
}
// console.log(getSpeciesByIds(species));

module.exports = getSpeciesByIds;
