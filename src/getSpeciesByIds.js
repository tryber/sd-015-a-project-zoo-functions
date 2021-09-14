// Ref:
// https://github.com/tryber/sd-015-a-project-zoo-functions/tree/leonardo-felix-zoo-functions-project
// https://github.com/tryber/sd-015-a-project-zoo-functions/tree/pedro-guarize-zoo-functions-project

const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((id) => data.species.find((spec) => spec.id === id));
}

module.exports = getSpeciesByIds;
