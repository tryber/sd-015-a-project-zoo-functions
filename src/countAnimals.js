const data = require('../data/zoo_data');

const greatAnimal = () => {
  const result = {};
  data.species.forEach((ani) => {
    result[`${ani.name}`] = ani.residents.length;
  });
  return result;
};

function countAnimals(animal) {
  let allAnimals = {};
  if (!animal) {
    allAnimals = greatAnimal();
  } else if (Object.keys(animal).length < 2) {
    const spec = Object.values(animal)[0];
    const thisAnimal = data.species.find((ani) => ani.name === spec);
    allAnimals = thisAnimal.residents.length;
  } else {
    const spec = Object.values(animal)[0];
    const thisAnimal = data.species.find((ani) => ani.name === spec);
    const genderCount = thisAnimal.residents.filter((ani) => ani.sex === Object.values(animal)[1]);
    allAnimals = genderCount.length;
  }
  return allAnimals;
}

module.exports = countAnimals;
