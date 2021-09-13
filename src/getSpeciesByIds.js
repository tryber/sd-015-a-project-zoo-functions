const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];

  // Consultei o repositório do Apolo Wilker para resolver essa parte:
  // Link: https://github.com/tryber/sd-015-a-project-zoo-functions/pull/9/files
  return data.species.filter((animals) => ids.includes(animals.id)); // O includes é um método que procura se determinado conjunto de strings pode ser encontrado dentro de outra string, e irá retornar true, caso positivo, e false, caso negativo. Neste caso, estamos perguntando se os ids que estão dentro de animals estão presentes dentro do array, criado através do parâmetro rest, ...ids. Como estamos usando o filter, ele irá retornar um array contendo todos os animais cujo id está presente no array ...ids.
}

module.exports = getSpeciesByIds;
