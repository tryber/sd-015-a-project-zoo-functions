const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // o parâmetro foi alterado para o formato "spread Operator" para funcionar caso fossem passado mais de um valor como salientado na questão
  const { species } = data;
  const animals = [];
  // declarado um array "animals" que vai ser o retorno dessa função 
  ids.forEach((e) => {
    animals.push(species.find((spc) => spc.id === e));
  });
  // realizado um forEach dentro do array ids para o array animals[] capturar através do push as especies que forem do mesmo id que o parametro passou ultilizando o find();
  return animals;
}

module.exports = getSpeciesByIds;
