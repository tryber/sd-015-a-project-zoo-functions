const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  // src: https://trybecourse.slack.com/archives/C027T2VU8U8/p1631556965189500
  const specieById = data.species.filter((specie) => specie.id === ids);
  return specieById;
}

module.exports = getSpeciesByIds;
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
