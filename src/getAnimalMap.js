// Observação: Exercício resolvido com a ajuda de colegas de turma (função includeNamesTrue).

const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// Para parametro vazio:
function allAnimalsPerRegion() {
  const animalsByRegion = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((animal) => {
    animalsByRegion[animal.location].push(animal.name);
  });
  return animalsByRegion;
}
// Função criada para fazer o filtro de buscas:
function includeNamesTrue(sex, sort) {
  const result = { NE: [], NW: [], SE: [], SW: [] };
  species.forEach((animalSpecie) => {
    let allAnimals = [...animalSpecie.residents];
    // Filtra os animais por sexo, se for um dos parametros.
    if (sex === 'male' || sex === 'female') {
      allAnimals = allAnimals.filter((animalFilterSex) => animalFilterSex.sex === sex);
    }
    // Pega apenas o nome dos animais de dentro dos objetos.
    const allAnimalsNames = allAnimals.map((singleAnimal) => singleAnimal.name);
    // Ordena os nomes por ordem alfabetica, se o parametro existir.
    if (sort === true) {
      allAnimalsNames.sort();
    }
    // Push dos nomes dos animais para cada especie dentro da chave da  região apropriada.
    result[animalSpecie.location].push({ [animalSpecie.name]: allAnimalsNames });
  });
  return result;
}

// Função principal:
function getAnimalMap(parameters) {
  //  Quando não recebe parametros ou quando não possui o parametro "includeNames":
  if (!parameters || !parameters.includeNames) {
    return allAnimalsPerRegion();
  }
  // Quando se usa o parametro "includeNames":
  return includeNamesTrue(parameters.sex, parameters.sorted);
}

module.exports = getAnimalMap;
