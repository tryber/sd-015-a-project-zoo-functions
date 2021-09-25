const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    const allAnimals = { };
    species.forEach((targetAnimal) => {
      allAnimals[targetAnimal.name] = targetAnimal.residents.length;
    });
    return allAnimals;
  }
  const { specie, sex } = animal;
  const animalSpecie = species.find((tgAnimal) => tgAnimal.name === specie).residents;
  const sexCounter = animalSpecie.reduce((acc, curr) => (curr.sex === sex ? acc + 1 : acc), 0);
  return sex === undefined ? animalSpecie.length : sexCounter;
}

/* Ideia de solução com deconstruct e acumulator por Pedro Guarizé.
Primeiro criei uma condição para retornar um objeto com todos os animais
caso seja undefined, usando o forEach para preencher chave e valor.
Depois usei o deconstruct para acessar espécie e gênero do animal parâmetro
passado.
Então acessei de agora com a espécie de acordo com o parâmetro.
Com o acumulator fiz a contagem dos animais encontrados.
Retornei o animal com seu contador caso o gênero fosse definido.
*/

module.exports = countAnimals;
