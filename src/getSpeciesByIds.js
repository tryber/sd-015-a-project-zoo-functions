const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // console.log(ids);
  if (ids === undefined) {
    return [];
  }
  const result = ids.map((elem) => {
    // console.log(elem);
    const mapResult = data.species.find((animal) =>
      // console.log(animal);
      // console.log(animal.id === elem);
      animal.id === elem);
    // console.log(mapResult);
    return mapResult;
  });
  // console.log(result);
  return result;
}

module.exports = getSpeciesByIds;
