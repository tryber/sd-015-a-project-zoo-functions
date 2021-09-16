const data = require('../data/zoo_data');

const emptyArr = [];
function getSpeciesByIds(...ids) {
  if (!ids.length) {
    return emptyArr;
  }
  return data.species.filter((element) => ids.includes(element.id));
}

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
