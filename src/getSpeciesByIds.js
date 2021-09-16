const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animals = [];
  data.species.forEach((element) => {
    ids.forEach((id) => {
      if (element.id === id) animals.push(element);
    });
  });
  return animals;
}
module.exports = getSpeciesByIds;
