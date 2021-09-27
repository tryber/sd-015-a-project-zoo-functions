const data = require('../data/zoo_data');
// consultado repositório de pedro guarize para este quesito: https://github.com/tryber/sd-015-a-project-zoo-functions/blob/pedro-guarize-zoo-functions-project/src/getAnimalMap.js
const { species } = data;
const eachLocation = ['NE', 'NW', 'SE', 'SW'];

// console.log(species.filter((specie) => specie.location)); // .map((anim) => anim.name));

const animalLocation = (locations) => species
  .filter((specie) => specie.location === locations)
  .map((animalsName) => animalsName.name);

// console.log(animalLocation(eachLocation));

const noParamGiven = () => eachLocation.reduce((object, currentLocation) => {
  const finalObject = object;
  finalObject[currentLocation] = animalLocation(currentLocation);
  return finalObject;
}, {});

function getAnimalMap(options) {
  // seu código aqui
  if (options === undefined) {
    return noParamGiven();
  }
}
console.log(getAnimalMap());

module.exports = getAnimalMap;

// 7. Implemente a função getAnimalMap
// A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e gênero.

// Sem parâmetros, retorna animais categorizados por localização;
// Com a opção includeNames: true especificada, retorna nomes de animais;
// Com a opção sorted: true especificada, retorna nomes de animais ordenados;
// Com a opção sex: 'female' ou sex: 'male' especificada, retorna somente nomes de animais macho/fêmea;
// Com a opção sex: 'female' ou sex: 'male' especificada e a opção sort: true especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados;
// Só retorna informações ordenadas e com sexo se a opção includeNames: true for especificada.
