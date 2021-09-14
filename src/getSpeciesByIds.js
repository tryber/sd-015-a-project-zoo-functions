const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  const animals = [];
  ids.forEach((e) => {
    animals.push(species.find((spc) => spc.id === e));
  });
  return animals;
}

module.exports = getSpeciesByIds;
