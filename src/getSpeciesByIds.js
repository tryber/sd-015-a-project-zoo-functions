const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  };
  return data.species.filter((findId) => ids.includes(findId.id));
};

module.exports = getSpeciesByIds;
