const data = require('../data/zoo_data');
// o seguinte código foi realizado com o auxílio das informações encontradas na página: https://dev.to/_bigblind/quick-tip-transform-an-array-into-an-object-using-reduce-2gh6

const defaultCountAnimals = data.species.reduce((acc, specie) => {
  const { name, residents } = specie;
  return {
    ...acc, [name]: residents.length,
  };
}, {});

function countAnimals(animalObj) {
  if (animalObj === undefined) return defaultCountAnimals;

  const { specie, sex } = animalObj;
  if (Object.keys(animalObj).length === 1) return defaultCountAnimals[specie];

  const animalData = data.species.find((animal) => specie === animal.name);
  return animalData.residents.reduce((acc, curr) => (curr.sex === sex ? acc + 1 : acc), 0);
}

module.exports = countAnimals;
