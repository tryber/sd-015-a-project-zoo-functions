const data = require('../data/zoo_data');
// Consultado PR do colega eric-cruz para resolução desta função https://github.com/tryber/sd-015-a-project-zoo-functions/pull/124/commits/115709da9dbafba95503995846238a84aa57407e
function everyAnimal() {
  const animalObj = {};
  data.species.forEach((elem) => {
    animalObj[elem.name] = elem.residents.length;
  });
  return animalObj;
}

function countAnimal(animal) {
  const specificAnimal = data.species.find(
    (elem) => elem.name === animal.specie
  );
  return specificAnimal.residents.length;
}

function countAnimalByGender(animal, gender) {
  const { species } = data;
  return species
    .find(({ name }) => name === animal)
    .residents.filter((element2) => element2.sex === gender).length;
  // console.log(species.find(({ name }) => name === animal));
}

function countAnimals(animal) {
  if (animal === undefined) {
    return everyAnimal();
  }
  if (animal.gender === undefined) {
    // console.log(specificAnimal);
    return countAnimal(animal);
  }
  return countAnimalByGender(animal.specie, animal.gender);
}
// console.log(countAnimals());
// console.log(countAnimals({ specie: 'bears' }));
console.log(countAnimals({ specie: 'bears', gender: 'female' }));

module.exports = countAnimals;

// 5. Implemente a função countAnimals
// Esta função é responsável por contabilizar a quantidade de animais de cada espécie.

// Observações técnicas

// Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
// Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
// Com o argumento { specie: 'giraffes', gender: 'female' }, retorna um número, a quantidade de girafas do gênero feminino.
// O que será avaliado

// Sem parâmetros, retorna as espécies e sua quantidade;
// Recebendo como parâmetro um objeto com a chave specie, retorna um número, a quantidade de animais daquela espécie;
// Recebendo como parâmetro um objeto com a chave specie e gender, retorna um número, a quantidade de animais daquela espécie, no gênero selecionado.
