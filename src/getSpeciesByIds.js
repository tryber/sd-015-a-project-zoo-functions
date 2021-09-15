const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const arr = [];
  ids.forEach((id) => species.filter((specie) => {
    if (specie.id === id) {
      return arr.push(specie);
    } return null;
    // Lint estava exigindo um retorno para a arrow function, então li no StackOverflow que o return null seria uma boa solução. Link: https://stackoverflow.com/questions/45014094/how-do-i-fix-expected-to-return-a-value-at-the-end-of-arrow-function-warning
  }));
  return arr;
}

console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
