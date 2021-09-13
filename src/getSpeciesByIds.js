const data = require('../data/zoo_data');

function getSpeciesByIds(...id) {
  // seu código aqui
  const { species } = data;
  const allIds = id;
  let returnable = [];
  allIds.forEach((currId) => {
    returnable = [...returnable, ...species.filter((specie) => {
      if (specie.id === currId) return true;
      return false;
    })];
  });
  return returnable;
}

getSpeciesByIds(1, 2);

module.exports = getSpeciesByIds;
