const data = require('../data/zoo_data');
// consultado repositório de pedro guarize para este quesito: https://github.com/tryber/sd-015-a-project-zoo-functions/blob/pedro-guarize-zoo-functions-project/src/getAnimalMap.js
const { species } = data;

// console.log(species.filter((specie) => specie.location === 'NE').map((anim) => anim.name))

const allAnimalsMapped = () => ({
  NE: species
    .filter((specie) => specie.location === 'NE')
    .map((anim) => anim.name),
  NW: species
    .filter((specie) => specie.location === 'NW')
    .map((anim) => anim.name),
  SE: species
    .filter((specie) => specie.location === 'SE')
    .map((anim) => anim.name),
  SW: species
    .filter((specie) => specie.location === 'SW')
    .map((anim) => anim.name),
});
// console.log(allAnimalsMapped());

function nameIncluded(param) {
  const NE = {
    NE: species
      .filter((specie) => specie.location === 'NE')
      .map((anim) => anim.residents.map((elem) => elem.name)),
  };
  // const animalNames =
  // const allAnimals = allAnimalsMapped();
  // allAnimals.NE.map((elem) => elem === 'lions');
  // console.log(allAnimals);
  console.log(NE);
}
nameIncluded();

function getAnimalMap(options) {
  // seu código aqui
  if (options === undefined) {
    return allAnimalsMapped();
  }
}

module.exports = getAnimalMap;

// 7. Implemente a função getAnimalMap
// A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e gênero.

// Observações técnicas

// Analise o teste unitário para entender os retornos que são esperados para esta função.
// O que será avaliado

// Sem parâmetros, retorna animais categorizados por localização;
// Com a opção includeNames: true especificada, retorna nomes de animais;
// Com a opção sorted: true especificada, retorna nomes de animais ordenados;
// Com a opção sex: 'female' ou sex: 'male' especificada, retorna somente nomes de animais macho/fêmea;
// Com a opção sex: 'female' ou sex: 'male' especificada e a opção sort: true especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados;
// Só retorna informações ordenadas e com sexo se a opção includeNames: true for especificada.
