const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const { species } = data;
  if (animal === undefined) {
    const animais = {};
    species.forEach((especie) => { animais[especie.name] = especie.residents.length; });
    return animais;
  }
  if (Object.keys(animal).length === 1 && Object.keys(animal).includes('specie')) {
    const buscarAnimal = species.find((ani) => ani.name.includes(animal.specie));
    return buscarAnimal.residents.length;
  }
  let contadorSex = 0;
  const buscarAnimal = species.find((ani) => ani.name.includes(animal.specie));
  buscarAnimal.residents.forEach((element) => {
    if (element.sex === animal.sex) { contadorSex += 1; }
  });
  return contadorSex;
}

module.exports = countAnimals;
