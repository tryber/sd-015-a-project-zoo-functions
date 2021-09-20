const { hours, species } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

function getBase() {
  const days = Object.keys(hours); // Pego todas a keys do objeto hours e coloca em um array
  const hoursPerDay = Object.values(hours); // Pego todos o values do objeto hours e coloco em um array
  const hoursOfFunction = days.reduce((acc, cur, i, array) => { // Faço um reduce para me retornar um objeto com as especificações do projeto para os dias da semana, menos a segunda, por isso o IF com array.length - 1
    if (i < array.length - 1) {
      acc[cur] = { officeHour: `Open from ${hoursPerDay[i].open}am until ${hoursPerDay[i].close}pm`,
        exhibition: species.filter((specie) =>
          specie.availability.includes(cur)).map((animal) => animal.name) };
      return acc;
    }
    acc[cur] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return acc;
  }, {});
  return hoursOfFunction;
}
function getSchedule(scheduleTarget) { // Se for passado algum parametro de dia, busca somente o horário de acordo com o parametro passado.
  const daysWeek = Object.keys(hours);
  const array = species.map((animal) => animal.name);
  if (daysWeek.includes(scheduleTarget)) { // se for passado um parametro de dia, busca as especies disponíveis conforme o dia de parametro
    return { [scheduleTarget]: getBase()[scheduleTarget] };
  }
  if (array.includes(scheduleTarget)) { // se for passado um paremetro de specie, busca os dias que ele está disponível
    const findTheAnimal = species.find((specie) => specie.name === scheduleTarget);
    return findTheAnimal.availability;
  }
  return getBase();
}
module.exports = getSchedule;
