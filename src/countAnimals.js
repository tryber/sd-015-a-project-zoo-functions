const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animaisQuantidade = {};
  if (animal === undefined) {
    data.species.map((obj) => { animaisQuantidade[obj.name] = obj.residents.length; });

    return animaisQuantidade;
  } if (Object.keys(animal).length === 1) {
    const quantidade = data.species.filter((obj) => obj.name.includes(Object.values(animal)));
    const resultado = quantidade[0].residents.length;
    return resultado;
  }

  const quantidadeObj = data.species.find((obj) => obj.name === Object.values(animal)[0]);
  const sex = Object.values(animal)[1];
  const quantidade = quantidadeObj.residents.filter((obj) => obj.sex === sex).length;
  console.log(quantidade);
  return quantidade;
}

// countAnimals({ specie: 'bears', gender: 'male' });

module.exports = countAnimals;
