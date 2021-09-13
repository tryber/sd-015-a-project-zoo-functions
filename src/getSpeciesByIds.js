const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  let arr = [];
  const getSpecie = ids.forEach(id => species.filter((specie) => {
    if (specie.id === id) {
      arr.push(specie);
    }
  }))
  return arr;
}

console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
