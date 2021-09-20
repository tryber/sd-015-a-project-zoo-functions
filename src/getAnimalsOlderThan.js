const data = require('../data/zoo_data');
// Vergani95 repositório consultado: https://github.com/tryber/sd-014-a-project-zoo-functions/blob/62d6605aa95edfdbe5b26ee02336af95dedd365a/src/zoo.js
function getAnimalsOlderThan(animal, age) { // parametros: nome do animal e idade
  const animalInside = data.species.find((animalName) => animalName.name === animal); // find vai retornar dentro de species a propriedade name que for igual ao parametro "animal", esse resultado é armazenado em animalInside.
  const animalAges = animalInside.residents.every((animalAge) => animalAge.age >= age); // A propriedade residents de animalInside recebe every, ou seja, será verificado se na propriedade age da propriedade resident, a age é maior ou igual ao parametro age. COmo é, vai retornar verdadeiro.
  return animalAges;
}

module.exports = getAnimalsOlderThan;
