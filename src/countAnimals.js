const data = require('../data/zoo_data');

function countAnimals(animal) {
  const chave = {};
  const atributosDaChave = data.species.map((element) => element.name);
  const valoresDaChave = data.species.map((element) => element.residents.length);
  for (let index = 0; index < valoresDaChave.length; index += 1) {
    chave[`${atributosDaChave[index]}`] = valoresDaChave[index];
  }
  if (animal !== undefined) {
    const especie = animal.specie;
    if (animal.sex !== undefined) {
      const genero = animal.sex;
      const encontrarChaveDoAnimal = data.species.find((element) => element.name === especie);
      const encontrarIndividuoDoGenero = (element) => element.sex === genero;
      const contadorDeGeneros = encontrarChaveDoAnimal.residents.filter(encontrarIndividuoDoGenero);
      return contadorDeGeneros.length;
    }
    return chave[especie];
  }
  return chave;
}

module.exports = countAnimals;
