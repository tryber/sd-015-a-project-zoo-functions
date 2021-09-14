const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  data.species.forEach((animals) => {
    if (animals.name === animal) {
      animals.residents.forEach((element) => {
        if (element.age > age) {
          return true;
        }
      });
    }
  });
}

module.exports = getAnimalsOlderThan;
