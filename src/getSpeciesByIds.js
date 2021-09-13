const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {data.species
  .filter(({id} = data.species) => ids.includes(id))
};


module.exports = getSpeciesByIds;
