const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  if (typeof scheduleTarget === 'undefined') {
    const AllAnimals = species.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      // Cria uma chave com o nome do animal
      return accumulator;
    }, {});
    return AllAnimals;
    // Sem parâmetros, retorna todas as espécies e suas quantidades.
  }
}

module.exports = getSchedule;
