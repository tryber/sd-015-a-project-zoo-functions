const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];
  if (!ids) {
    return result;
  }
  const findAnimal = () => ids.forEach((id) => {
    const newAnimal = species.filter((specie) => specie.id === id);
    result.push(...newAnimal);
  });
  findAnimal();
  return result;
}

module.exports = getSpeciesByIds;
