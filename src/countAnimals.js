const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const retorno = {};
    data.species.forEach((elemento) => {
      const nome = elemento.name;
      retorno[nome] = elemento.residents.length;
    });
    return retorno;
  }
  if (Object.keys(animal).includes('gender')) {
    const procurado = data.species.find((especie) => especie.name === animal.specie);
    const sexoProcurado = procurado.residents.filter((elemento) => elemento.sex === animal.gender);
    return sexoProcurado.length;
  }
  return data.species.find((a) => a.name === animal.specie).residents.length;
}

module.exports = countAnimals;
