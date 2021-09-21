const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acumulador, { name, residents }) => {
      Object.assign(acumulador, { [name]: residents.length });
      return acumulador;
    }, {});
  }
  if (Object.keys(animal).length === 1) {
    const speciess = data.species.find((namies) => namies.name === animal.specie);
    return speciess.residents.length;
  }
  const doisoBJ = data.species.find((doisAnimal) => doisAnimal.name === animal.specie);
  const entraObjeto = doisoBJ.residents.filter((moradores) => moradores.sex === animal.sex);
  return entraObjeto.length;
  // seu código aqui
}
console.log(countAnimals({ specie: 'bears', sex: 'male' }));
module.exports = countAnimals;
