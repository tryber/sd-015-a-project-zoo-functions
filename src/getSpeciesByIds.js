const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // return must be an array in any case
  if (!ids) return [];

  const { species } = data;
  if (!Array.isArray(ids)) {
    const specieFound = species.find(({ id }) => id === ids);
    return [specieFound];
  }

  return species.filter(
    ({ id }) => {
      const found = ids.find((individualId) => individualId === id);
      return found ? id === found : false;
    },
  );
}

module.exports = getSpeciesByIds;
