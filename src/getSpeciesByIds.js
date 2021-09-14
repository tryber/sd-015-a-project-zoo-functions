const data = require('../data/zoo_data');

const findSpecie = (id) => data.species.find((specie) => specie.id === id);

function getSpeciesByIds(...ids) {
  // seu código aqui
  const result = [];
  ids.forEach((id) => {
    const specie = findSpecie(id);
    if (typeof specie !== 'undefined') {
      result.push(specie);
    }
  });
  return result;
}

module.exports = getSpeciesByIds;
