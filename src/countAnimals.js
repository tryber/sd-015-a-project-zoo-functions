const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // QUando não é passado nenhum valor para o parametro animal:
  if (!animal) {
    const objectOfAnimals = {};
    // Para cada especie de animal, será criada uma chave com o Nome da especie e valor correspondente a quantidade de animais da especie:
    const allAnimals = () => species.forEach((animals) => {
      const newKey = ({ [animals.name]: animals.residents.length });
      Object.assign(objectOfAnimals, newKey);
    });
    allAnimals();
    return objectOfAnimals;
    // Se existe mais de uma chave no objeto-parametro "animal":
  } if (Object.keys(animal).length > 1) {
    const animalTarget = species.find((target) => target.name === animal.specie);
    return animalTarget.residents.filter((target) => animal.sex === target.sex).length;
  }
  // Se apenas uma chave existir no objeto-parametro:
  const animalTarget = species.find((target) => target.name === animal.specie);
  return animalTarget.residents.length;
}

module.exports = countAnimals;
