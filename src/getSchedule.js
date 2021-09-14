const data = require('../data/zoo_data');

const { hours, species } = data;
// const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday } = hours;
// Tuesday: `Open from ${Tuesday.open}am until ${Tuesday.close}pm`,
// Wednesday: `Open from ${Wednesday.open}am until ${Wednesday.close}pm`,
// Thursday: `Open from ${Thursday.open}am until ${Thursday.close}pm`,
// Friday: `Open from ${Friday.open}am until ${Friday.close}pm`,
// Saturday: `Open from ${Saturday.open}am until ${Saturday.close}pm`,
// Sunday: `Open from ${Sunday.open}am until ${Sunday.close}pm`,
// Monday: `Open from ${Monday.open}am until ${Monday.close}pm`,

function weeklyAnimal(param) {
  const animalPerDay = species
    .filter((specie) => specie.availability.includes(param))
    .map((anim) => anim.name);
  return animalPerDay;
}
// console.log(weeklyAnimal());
// species.filter((specie) => specie.availability.some((elem) =>
//     elem === day)).map((animal) => animal.name)

function weeklySchedule() {
  const deuCerto = Object.keys(hours).map((weeklyDay) => ({
    [weeklyDay]: {
      officerHour:
        hours[weeklyDay].open === 0
          ? 'CLOSE'
          : `Open from ${hours[weeklyDay].open}am until ${hours[weeklyDay].close}pm`,
      exhibition:
        hours[weeklyDay].open === 0
          ? 'The zoo will be closed!'
          : weeklyAnimal(weeklyDay),
    },
  }));
  return deuCerto;

  // return { teste: `Open from ${Tuesday.open}am until ${Tuesday.close}pm`};
}
console.log(weeklySchedule());
function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return weeklySchedule();
  }
}

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
