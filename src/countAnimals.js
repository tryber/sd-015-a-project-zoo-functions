const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// Objec.fromEntries -> https://docs.w3cub.com/javascript/global_objects/object/fromentries, o entendimento dessa estrutura foi tirada do código VICTOR EMMANUEL OLIVEIRA FERNANDES DE ARAUJO.

function countAnimals(animal) {
  // seu código aqui.
  if (!animal) {
    const animals = Object.fromEntries(species.map((ani) => [ani.name, ani.residents.length]));
    return animals;
  }
  const { specie: name, sex } = animal; // O paramentro recebido é um objeto com duas possibilidades, desestruturamos para conseguir ter acesso as keys desse objeto.
  if (name && !sex) {
    return species.find((oneAnimal) => oneAnimal.name === name).residents.length; // Uso do find é para satisfazer a primeira condição.
  }
  return species.find((oneAnimal) => oneAnimal.name === name)
    .residents.filter((sexAnimal) => sexAnimal.sex === sex).length; // O Filter entrega um array com os elementos que satisfazem a condição.
}
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
module.exports = countAnimals;
