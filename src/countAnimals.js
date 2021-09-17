const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    const AllAnimals = species.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      // Cria uma chave com o nome do animal
      return accumulator;
    }, {});
    return AllAnimals;
    // Sem parâmetros, retorna todas as espécies e suas quantidades.
  }

  const { specie, gender } = animal;
  const AnimalSpecie = species.find((elemento) => elemento.name === specie).residents;
  // AnimalSpecie é o array com todos os residentes da especie passada como parametro specie.
  const AnimalGender = AnimalSpecie.reduce((acc, curr) => (curr.sex === gender ? acc + 1 : acc), 0);
  return gender === undefined ? AnimalSpecie.length : AnimalGender;
  // Quando o argumento é só a { specie: 'penguins' }, retorna o tamanho do array AnimalSpecie que é a quantidade de pinguins no zoológico;
  // Quando são duas chaves { specie: 'giraffes', sex: 'female' }, retorna a variavel AnimalGender que é a quantidade de girafas do gênero feminino.
}

// console.log(countAnimals());
// console.log(countAnimals({ specie: 'penguins' }));
// console.log(countAnimals({ specie: 'giraffes' }));
// console.log(countAnimals({ specie: 'bears', gender: 'female' }));
// console.log(countAnimals({ specie: 'elephants', gender: 'male' }));

module.exports = countAnimals;
