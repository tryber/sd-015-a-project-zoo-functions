const data = require('../data/zoo_data');

function getSpeciesByIds(id1, id2) {
  let result = [];
  if (!id1 && !id2) {
    result = [];
  } else if (!id2) {
    result.push(data.species.find((element) => element.id === id1));
  } else {
    result.push(data.species.find((element) => element.id === id1));
    result.push(data.species.find((element) => element.id === id2));
  }
  return result;
}
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
