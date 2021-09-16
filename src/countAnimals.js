const data = require('../data/zoo_data');

const todosAnimais = () => {
  const object = {};
  const { species } = data;
  // declarei variáveis requiri o objeto data como { especies }
  species.forEach((especie) => {
    object[especie.name] = especie.residents.length;
  });
  // realizei um forEach pra capturar as epecies e a quantidade de cada dentro do array object[].
  return object;
};
// essa função foi ultilizada como callback na countAnimals, caso nenhum valor fosse empregado aos parâmetros a função retornaria o array object[]

const countAnimals = (animal = {}) => {
  const { specie, sex } = animal;
  const { species } = data;
  // refatorei o parametroa animal de specie e gender para sex e gender e requiri o objeto species como data.
  if (sex === undefined && specie !== undefined) {
    return species.find((all) => all.name === specie).residents.length;
  }
  // caso sex fosse undefined a função usa um find() para achar a especie passada no parâmetro e usa o length() pra contar os residentes da mesma independente do gênero.

  if (sex !== undefined) {
    const genero = species.find((g) => g.name === specie);
    return genero.residents.filter((a) => a.sex === sex).length;
  }

  return todosAnimais();

  // caso sex *não* fosse undefined a função usa um find() para achar a especie passada no parâmetro e usa o length() pra contar os residentes que são do gênero que o parâmetro definiu.
};

// caso nenhuma das requisições if() a cima comtemplassem as condições do parâmetro (animal) a função todosAniamis() é chamada como callback para retornar um array com todas as especies e seus residentes.length();

console.log(countAnimals({ specie: 'bears', gender: 'female' }));
module.exports = countAnimals;
