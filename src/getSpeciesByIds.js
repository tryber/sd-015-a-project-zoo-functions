const data = require('../data/zoo_data');

function getSpeciesByIds(...id) {
  // seu código aqui
  const allIds = id;
  let returnable = [];
  allIds.forEach((currId) => {
    returnable = [...returnable, ...data.species.filter((specie) => specie.id === currId)];
  });
  return returnable;
}

module.exports = getSpeciesByIds;
