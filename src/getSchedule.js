const data = require('../data/zoo_data');

const { hours, species } = data;

function weeklyOfficeHours(weeklyDay) {
  // eslint-disable-next-line no-unused-expressions
  return hours[weeklyDay].open === 0
    ? 'CLOSED'
    : `Open from ${hours[weeklyDay].open}am until ${hours[weeklyDay].close}pm`;
}

function exhibitionDays(weeklyDay) {
  // eslint-disable-next-line no-unused-expressions
  return hours[weeklyDay].open === 0
    ? 'The zoo will be closed!'
    : species
      .filter((animalAvailable) =>
        animalAvailable.availability.includes(weeklyDay))
      .map((names) => names.name);
}

console.log(exhibitionDays('Monday'));

function weeklySchedule() {
  return Object.keys(hours).reduce((finalObj, weeklyDay) => {
    const actualObject = finalObj;
    actualObject[weeklyDay] = {
      officeHour: weeklyOfficeHours(weeklyDay),
      exhibition: exhibitionDays(weeklyDay),
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

function eachAnimal(animal) {
  return species.find((anim) => anim.name === animal).availability;
}

function eachDay(weeklyDay) {
  if (weeklyDay !== 'Monday') {
    const dailly = species
      .filter((elem) => elem.availability.includes(weeklyDay))
      .reduce((finalObject) => {
        const finalObje = finalObject;
        finalObje[weeklyDay] = {
          [weeklyDay]: {
            officeHour: weeklyOfficeHours(weeklyDay),
            exhibition: exhibitionDays(weeklyDay) },
        };
        return finalObje[weeklyDay];
      }, {});
    return dailly;
  }
  // eslint-disable-next-line no-return-assign
  return { [weeklyDay]: {
    officeHour: weeklyOfficeHours(weeklyDay),
    exhibition: exhibitionDays(weeklyDay) } };
}

console.log(eachDay('Monday'));

function getSchedule(scheduleTarget) {
  if (
    !scheduleTarget || (!isDay(scheduleTarget) && !isAnimal(scheduleTarget))
    // !scheduleTarget
  ) {
    return weeklySchedule();
  }
  if (isAnimal(scheduleTarget)) {
    return eachAnimal(scheduleTarget);
  }
  return eachDay(scheduleTarget);
}
// console.log(getSchedule('Sunday'));

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
