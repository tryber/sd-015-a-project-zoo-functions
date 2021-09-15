const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animals = [];
  ids.forEach((id) => {
    animals.push(species.find((iten) => iten.id === id));
  });
  return animals;
}
console.log(getSpeciesByIds('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));
module.exports = getSpeciesByIds;
