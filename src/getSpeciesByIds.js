const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // return ids.reduce((acc, idCur) => (!ids) ? [] : acc.concat(data.species
  //   .find((element) => element.id === idCur)), []);
  return data.species.filter((spiecie) => ids.includes(spiecie.id));
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'))
module.exports = getSpeciesByIds;
