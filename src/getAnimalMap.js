const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function speciesByLocation(callback) { // função recebe uma callback que retorna um reduce do obj.species
  return species.reduce((acc, specie) => {
    if (!acc[specie.location]) { // se o acc não contem specie.location então é um []
      acc[specie.location] = [];
    }
    if (callback) { // se a callback for chamada, e acc receber specie.location...fará um push do que o parametro passado pela callback solicitar
      acc[specie.location].push(callback(specie));
    }
    return acc;
  }, {});
}

const onlyNames = (options) => (specie) => specie.name;// constante que busca os nomes dentro do obj

const groupByNames = (options) => (specie) => {
  let residents; // variavel traz a chave residents do obj
  if (options.sex) { // se o parametro solicitar a chave sex
    residents = specie.residents // atribui o nome dos residentes com a opção sex chamada
      .filter((res) => res.sex === options.sex)
      .map((res) => res.name);
  } else {
    residents = specie.residents.map((res) => res.name);// senão atribui apenas o nome de todos residentes sem destinção
  }

  if (options.sorted) { // se é solicitado os nomes em ordem alfabética
    residents = residents.sort();
  }

  return { // retorna obj com nome das especies e seus respectivos residentes
    [specie.name]: residents,
  };
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) { // se não é informado os parametros
    return speciesByLocation(onlyNames(options));// retorna a função speciesByLocation, que recebendo a função onlyNames traz um obj de arrays com as especies e suas localizações
  }

  return speciesByLocation(groupByNames(options)); // retorna a função speciesByLocation e as comparações possiveis da função groupByNames, de acordo com o parametro passado.
}

module.exports = getAnimalMap;
