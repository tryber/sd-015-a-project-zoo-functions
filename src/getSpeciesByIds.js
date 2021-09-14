const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if(ids === undefined) {
    return []
  }
  const newArray = data.species.filter((animal) => ids.includes(animal.id))
  return newArray
}

module.exports = getSpeciesByIds;
