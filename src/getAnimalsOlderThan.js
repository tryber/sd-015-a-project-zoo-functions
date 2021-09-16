const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  let aboveMinimumAge = true;
  data.species.forEach((animals) => {
    if (animals.name === animal) {
      animals.residents.forEach((element) => {
        if (element.age < age) aboveMinimumAge = false;
      });
    }
  });
  return aboveMinimumAge;
}
module.exports = getAnimalsOlderThan;
