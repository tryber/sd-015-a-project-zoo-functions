const data = require('../data/zoo_data');

// function getAnimalsOlderThan(animal, age) {
//   // seu código aqui
// }

// https://github.com/tryber/sd-015-a-project-zoo-functions/pull/3/commits/37c35b2e4d9696368a14f559f5743d91d2c425dc
const getAnimalsOlderThan = (animal, age) => data.species.find((e) => e.name === animal).residents
  .every((e) => e.age >= age);
getAnimalsOlderThan('tigers', 15);

module.exports = getAnimalsOlderThan;
