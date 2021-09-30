const data = require('../data/zoo_data');
// consultado repositório de pedro guarize para este quesito: https://github.com/tryber/sd-015-a-project-zoo-functions/blob/pedro-guarize-zoo-functions-project/src/getAnimalMap.js
const { species } = data;
const eachLocation = ['NE', 'NW', 'SE', 'SW'];

const animalLocation = (locations) => species
  .filter((specie) => specie.location === locations)
  .map((animalsName) => animalsName.name);

const noParamGiven = () => eachLocation.reduce((object, currentLocation) => {
  const finalObject = object;
  finalObject[currentLocation] = animalLocation(currentLocation);
  return finalObject;
}, {});
// console.log(noParamGiven()['NE']);

const animalByName = () => {
  const residentsObject = eachLocation.reduce((obj2, currentLocation2) => {
    const finalObject2 = obj2;
    finalObject2[currentLocation2] = noParamGiven()[currentLocation2]
      .map((animal) => ({ [animal]: species
        .find((animal2) => animal2.name === animal).residents
        .map((resident) => resident.name) }));
    return finalObject2;
  }, {});
  return residentsObject;
};

const animalByNameSorted = () => {
  const residentsObject = eachLocation.reduce((obj2, currentLocation2) => {
    const finalObject2 = obj2;
    finalObject2[currentLocation2] = noParamGiven()[currentLocation2]
      .map((animal) => ({ [animal]: species
        .find((animal2) => animal2.name === animal).residents
        .map((resident) => resident.name).sort() }));
    return finalObject2;
  }, {});
  return residentsObject;
};

const animalByNameSexSorted = (sexPicked) => {
  const residentsObjectSorted = eachLocation.reduce((obj3, currentLocation3) => {
    const finalObject3 = obj3;
    finalObject3[currentLocation3] = noParamGiven()[currentLocation3]
      .map((animal3) => ({ [animal3]: species
        .find((animal4) => animal4.name === animal3).residents
        .filter((resident2) => resident2.sex === sexPicked).map((elem) => elem.name).sort() }));
    return finalObject3;
  }, {});
  return residentsObjectSorted;
};

console.log(animalByNameSorted());

function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return noParamGiven();
  }
  if (options.sorted && options.sex) {
    return animalByNameSexSorted(options);
  }
  if (options.includeNames) {
    return animalByName();
  }
  return animalByNameSorted();
}
// console.log(getAnimalMap({ sorted: true }));

module.exports = getAnimalMap;

// 7. Implemente a função getAnimalMap
// A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e gênero.

// Com a opção includeNames: true especificada, retorna nomes de animais;
// Com a opção sorted: true especificada, retorna nomes de animais ordenados;
// Com a opção sex: 'female' ou sex: 'male' especificada, retorna somente nomes de animais macho/fêmea;
// Com a opção sex: 'female' ou sex: 'male' especificada e a opção sort: true especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados;
// Só retorna informações ordenadas e com sexo se a opção includeNames: true for especificada.

// Sem parâmetros, retorna animais categorizados por localização;
