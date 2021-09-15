const data = require('../data/zoo_data');

const { hours, species } = data;

function weeklyAnimal(param) {
  const animalPerDay = species
    .filter((specie) => specie.availability.includes(param))
    .map((anim) => anim.name);
  return animalPerDay;
}

function weeklySchedule() {
  return Object.keys(hours).reduce((finalObj, weeklyDay) => {
    const actualObject = finalObj;
    actualObject[weeklyDay] = {
      officeHour:
        hours[weeklyDay].open === 0
          ? 'CLOSED'
          : `Open from ${hours[weeklyDay].open}am until ${hours[weeklyDay].close}pm`,
      exhibition:
        hours[weeklyDay].open === 0
          ? 'The zoo will be closed!'
          : weeklyAnimal(weeklyDay),
    };
    return finalObj;
  }, {});
}

function isDay(day) {
  return Object.keys(hours).find((elem) => elem.includes(day));
}

function isAnimal(anim) {
  return species.some((elem) => elem.name.includes(anim));
}

function isMonday(day) {
  return Object.keys(hours).some((elem2) => elem2.includes(day));
}

function mondaySchedule() {
  return Object.keys(hours).find((elem3) => elem3 === 'Monday');
}
console.log(mondaySchedule());

function getSchedule(scheduleTarget) {
  if (!scheduleTarget || (!isDay(scheduleTarget) && (!isAnimal(scheduleTarget)))) {
    return weeklySchedule();
  }
  if (isMonday(scheduleTarget)) {
    Object.keys(hours).map((mondayObj) => ({
      officeHour: mondayObj[scheduleTarget2],
      exhibition: 'The zoo will be closed!',
    // eslint-disable-next-line no-sequences
    }, {}));
  }
}
// console.log(isMonday('Monday').filter(elem3) => elem3);
// console.log(getSchedule('Monday'));

module.exports = getSchedule;

// 8. Implemente a função getSchedule
// A função é responsável por disponibilizar as informações de horário dos animais em uma consulta para o usuário, que pode querer ter acesso ao cronograma da semana, de um dia ou de um animal em específico.

// Observações técnicas

// Analise os testes unitários para entender os retornos que são esperados para esta função;
// Quebre o problema em funções menores para que fique mais simples de administrar a responsabilidade de cada uma delas.
// O que será avaliado

// Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
// Com parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;
// Se um único dia for passado, retorna os horários para aquele dia e quais animais estarão disponíveis;
// Se o nome de um animal for passado, deverá retornar um array com os dias em que ele estará em exibição.
