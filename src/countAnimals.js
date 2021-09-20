const data = require('../data/zoo_data');
// jcassanji repositório consultado: https://github.com/tryber/sd-015-a-project-zoo-functions/blob/c69de205e809f82fa75f305d8553857c9e9353a5/src/countAnimals.js
const animals = {};

function animalsResidentsLength(e) { //
  animals[e.name] = e.residents.length; // função vai ser usada em um forEach para a propriedade species. no objeto vazio animals é adicionado a chave a propriedade name e com o valor de baseado na quantidade de elementos da array 'residents'.
}

function countAnimals(animal) {
  if (animal === undefined) { // se o parametro estiver vazio
    data.species.forEach((e) => animalsResidentsLength(e)); // a propriedade species do arquivo data vai receber um forEach que vai rodar a função seguinte em cada  uma das propriedades de sua array.
  } else if (animal.sex === undefined) { // se a propriedade sex do parametro animal estiver vazia
    const residentsObject = data.species.filter((e) => animal.specie.includes(e.name))[0].residents; // especies do arquivo data vai receber uma filter retornando um array pela função a seguir. propriedade especie que pertencer a animal e ter incluído a propriedade name da propriedade e. dentro desse array, a primeira posição[o] vai ser  retornado a propriedade residents.
    return residentsObject.length; // retorna o tamanho da array residents.
  } else { // caso contrário
    const residentsObject = data.species.filter((e) => animal.specie.includes(e.name))[0].residents; // vai retornar a propriedade residents do  primeiro elemento da array que filter criar.
    return residentsObject.filter((e) => e.sex === animal.sex).length; // forma um array com os elementos de residentsObject, propriedade sex que forem iguais a propriedade sex do parametro animal. o .length vai retornar um número desse array, a depender do tanto de elementos dentro dele.
  } return animals; // nenhuma das hipóteses acima retorna animals.
}

module.exports = countAnimals;
