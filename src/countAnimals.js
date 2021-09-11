const data = require('../data/zoo_data');

function contarAnimalEspecifico(animal) {
  let resposta;
  const animais = data.species.find((elemento) => elemento.name === animal.specie).residents;
  if (animal.gender !== undefined) {
    resposta = animais.reduce((contador, bixo) => {
      const retornoReduce = bixo.sex === animal.gender ? contador + 1 : contador;
      return retornoReduce;
    }, 0);
  } else {
    resposta = animais.length;
  }
  return resposta;
}

function countAnimals(bixin) {
  let resposta = {};
  if (bixin === undefined) {
    const especies = data.species.map((elemento) => elemento.name);
    especies.forEach((elemento) => {
      resposta[elemento] = data.species.find((bixinho) => {
        const retornoFind = bixinho.name === elemento;
        return retornoFind;
      }).residents.length;
    });
  } else {
    resposta = contarAnimalEspecifico(bixin);
  }
  return resposta;
}

module.exports = countAnimals;
