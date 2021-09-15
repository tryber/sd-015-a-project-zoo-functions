const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const result = ids.map((elem) => {
    const mapResult = data.species.find((animal) =>
      animal.id === elem);
    return mapResult;
  });
  return result;
}

module.exports = getSpeciesByIds;
