const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animals = [];
  ids.forEach((id) => {
    animals.push(species.find((iten) => iten.id === id)); 
  });
  return animals;
}
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
