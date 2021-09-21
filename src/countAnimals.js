const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data'); 

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acumulador, { name, residents }) => {
      Object.assign(acumulador, { [name]: residents.length });
      // console.log('aqui o acc', acumulador);
      return acumulador;
    }, {});
  }
  if (Object.keys(animal).length === 1) {
    const speciess = data.species.find((namies) => namies.name === animal.specie);
    // console.log('aqui 1', speciess);
    return speciess.residents.length;
  }
  const doisoBJ = data.species.find((doisAnimal) => doisAnimal.name === animal.specie);
  const entraObjeto = 
  return doisoBJ;
  // seu código aqui
}
console.log(countAnimals({ specie: 'bears', gender: 'female' }));
// console.log(countAnimals({ specie: 'elephants' }));
// console.log('aqui o outro console', countAnimals());
module.exports = countAnimals;

// Se nenhum argumento for passado, retorna um objeto cujo nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
// Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
// Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do gênero feminino.
