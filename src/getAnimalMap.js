const data = require('../data/zoo_data');

/*
// Requisito 1 do Exercício:
function speciesFrom(location) { // Função que retorna todas as espécies presentes em uma determinada 'location' do Zoo.
  return data.species.filter((specie) =>
    specie.location === location).map((filteredSpecie) => filteredSpecie.name);
} // location 'NE' --> [ 'lions', 'giraffes' ]

const allSpeciesPerLocation = {
  NE: speciesFrom('NE'),
  NW: speciesFrom('NW'),
  SE: speciesFrom('SE'),
  SW: speciesFrom('SW'),
}; // É um objeto que apresenta uma divisão de todas as espécies, por localização.

// Requisito 2 do Exercício:
function getAllNamesFrom(thatSpecie) { // Callback que retorna um array o nome de cada animal from 'thatSpecie'.
  const allNamesArray = [];
  const thatSpecieInfo = data.species.find((specie) => specie.name === thatSpecie);
  Object.values(thatSpecieInfo)[5].forEach((animalObj) => allNamesArray.push(animalObj.name));
  return allNamesArray;
} // 'thatSpecie' lions --> [ 'Zena', 'Maxwell', 'Faustino', 'Dee' ].

function speciesFromPlusNames(location) { // Função que retorna um array de objetos, onde a chave de cada objeto é a espécie presente naquela 'location' e o valor é um array com o nome de todos os animais da respectiva espécie.
  const speciesAndNamesObj = {};
  let littleObj = {};
  const resultArray = [];

  speciesFrom(location).forEach((specie) => {
    speciesAndNamesObj[specie] = getAllNamesFrom(specie);
    return speciesAndNamesObj;
  });
  // O speciesAndNamesObj é um objeto no estilo: { lions: [ 'Zena', 'Maxwell', 'Faustino', 'Dee' ], giraffes: [ 'Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard' ], ... }

  Object.entries(speciesAndNamesObj).forEach((microArray) => { // Transformação do 'speciesAndNamesObj' no retorno da função.
    const [specie, animalsNamesArray] = microArray;
    littleObj[specie] = animalsNamesArray;
    resultArray.push(littleObj);
    littleObj = {};
  });
  return resultArray; // [{ lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] }, { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] }]
}

const allSpecAndNamesPerLocation = {
  NE: speciesFromPlusNames('NE'),
  NW: speciesFromPlusNames('NW'),
  SE: speciesFromPlusNames('SE'),
  SW: speciesFromPlusNames('SW'),
}; // É um objeto que apresenta uma divisão de todas as espécies, por localização.

// Requisito 3 do Exercício:

function getAnimalMap(options) {
  // seu código aqui
}

module.exports = getAnimalMap;
*/
