const data = require('../data/zoo_data');

const emptyArr = [];
function getSpeciesByIds(...ids) {
  if (!ids.length) {
    return emptyArr;
  }
  return data.species.filter((element) => {
    if (ids.includes(element.id)) {
      return element;
    }
    return null;
  });
}

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
