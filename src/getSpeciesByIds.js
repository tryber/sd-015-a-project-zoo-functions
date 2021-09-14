const data = require('../data/zoo_data');

function getSpeciesByIds(id1, id2) {
  const animals = [];
  data.species.forEach((element) => {
    if (element.id === id1 || element.id === id2) animals.push(element);
  });
  return animals;
}

getSpeciesByIds(
  '0938aa23-f153-4937-9f88-4858b24d6bce',
  '01422318-ca2d-46b8-b66c-3e9e188244ed',
);
module.exports = getSpeciesByIds;
