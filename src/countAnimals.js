const data = require('../data/zoo_data');

const animalList = () => {
  const animais = {};
  for (let index = 0; index < data.species.length; index += 1) {
    animais[data.species[index].name] = data.species[index].residents.length;
  }
  return animais;
};
const verificaAnimal = (animal) => {
  const dados = data.species.find((search) => search.name === animal);
  return dados.residents.length;
};
const verificaAnimalSexo = (animal, sex) => {
  const nome = data.species.find((search) => search.name === animal);
  let cont = 0;
  for (let index = 0; index < nome.residents.length; index += 1) {
    if (nome.residents[index].sex === sex) {
      cont += 1;
    }
  }
  return cont;
};
const contadores = (animal) => {
  if (animal.specie !== undefined && animal.sex === undefined) {
    return verificaAnimal(animal.specie);
  }
  if (animal.specie !== undefined && animal.sex !== undefined) {
    return verificaAnimalSexo(animal.specie, animal.sex);
  }
};
const countAnimals = (...animal) => {
  if (animal[0] === undefined) {
    return animalList();
  }
  return contadores(animal[0]);
};

module.exports = countAnimals;
