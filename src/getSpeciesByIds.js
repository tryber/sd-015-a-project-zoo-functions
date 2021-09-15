const data = require('../data/zoo_data');

const emptyArr = [];
function getSpeciesByIds(...ids) {
  if (!ids.length) {
    return emptyArr;
  }
  return data.species.filter((element) => ids.includes(element.id));
}

// return null no final pq o lint queria que houvesse um return no final da arrow function

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
