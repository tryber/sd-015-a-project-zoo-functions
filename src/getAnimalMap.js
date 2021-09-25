const { species } = require('../data/zoo_data');

// Repositório consultado: Tamyres em https://github.com/tryber/sd-015-a-project-zoo-functions/pull/47/files

const speciesLocalization = species.map((specie) => [specie.location, specie.name]);
// Uma variável que recebe um array com a localização e o nome da espécie recebido no parâmetro reescrita com o map.

function speciesNames() {
  return species.map((specie) => ({
    [specie.name]: specie.residents.map((animal) => animal.name),
  }));
}
// Esta função cria uma chave e valor com a espécie e o nome do animal.

function speciesNamesInOrder(arrayReference) {
  return arrayReference.map((animal) => ({
    [Object.keys(animal)[0]]: Object.values(animal)[0].sort(),
  }));
}
// Esta função reordena os animais recebidos.

function speciesSex(sex) {
  return species.map((specie) => ({
    [specie.name]: specie.residents.map((resident) => {
      if (resident.sex === sex) {
        return resident.name;
      }
      return '';
    }).filter((name) => name !== ''),
  }));
}
// Esta função retorna os animais de acordo com o sexo recebido no parâmetro.

function defaultResult() {
  return speciesLocalization.reduce((acc, curr) => {
    const [local, animal] = curr;
    acc[local].push(animal);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}
// Esta função adiciona o animal e sua localização de acordo com o acumulador.

function animalsNamesAndLocal(arrayReference) {
  return arrayReference.reduce((acc, curr, index) => {
    acc[speciesLocalization[index][0]].push(curr);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}
// Esta função faz o mesmo que a anterior, mas de acordo com o array passado.

const results = {
  [['includeNames', 'true']]:
  animalsNamesAndLocal(speciesNames()),
  [[['includeNames', 'true'], ['sorted', 'true']]]:
  animalsNamesAndLocal(speciesNamesInOrder(speciesNames())),
  [[['includeNames', 'true'], ['sex', 'male']]]:
  animalsNamesAndLocal(speciesSex('male')),
  [[['includeNames', 'true'], ['sex', 'female']]]:
  animalsNamesAndLocal(speciesSex('female')),
  [[['includeNames', 'true'], ['sex', 'male'], ['sorted', 'true']]]:
  animalsNamesAndLocal(speciesNamesInOrder(speciesSex('male'))),
  [[['includeNames', 'true'], ['sex', 'female'], ['sorted', 'true']]]:
  animalsNamesAndLocal(speciesNamesInOrder(speciesSex('female'))),
};
// Este objeto encapsula todas as opções de retorno desejado, com ou sem localização, de acordo com sexo etc.

function getAnimalMap(options) {
  if (options === undefined) return defaultResult();

  if (results[Object.entries(options)] === undefined) return defaultResult();

  return results[Object.entries(options)];
}
// Dentro da função definimos os parâmetros para retornar.

module.exports = getAnimalMap;
