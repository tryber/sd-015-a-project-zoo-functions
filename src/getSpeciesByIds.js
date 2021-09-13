const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  return data.species.filter((e) => console.log(e.id === ids));
};
getSpeciesByIds('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');

module.exports = getSpeciesByIds;