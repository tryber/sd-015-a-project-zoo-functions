const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = data.species
    .filter((element) => element.name === animal)
    .map((idade) => idade.residents);
  // .every((idade) => idade.age >= age);
  console.log(...animals[0]);
  const ages = animals.every((ele, idx) => ele[idx].age > age);
  // const ages = animals.filter((ele, idx) => ele.name === 'Joe');
  // console.log(animals.filter((elem, idx2) => elem));
  return ages;
  // console.log(ages);
}

// console.log(getAnimalsOlderThan('otters', 7));
getAnimalsOlderThan('penguins', 10);

module.exports = getAnimalsOlderThan;

// Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.
// Observações técnicas

// Deve retornar um valor booleano.

// O que será avaliado
// Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada.
