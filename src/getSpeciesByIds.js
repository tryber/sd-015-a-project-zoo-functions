const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arraySpecies = [];
  if (ids[0] === undefined) {
    return arraySpecies;
  } if (ids[1] === undefined) {
    arraySpecies.push(data.species.find((animal) => animal.id === ids[0]));
    return arraySpecies;
  }
  return data.species.filter((animal) => ids.includes(animal.id));
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
