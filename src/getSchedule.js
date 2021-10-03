const data = require('../data/zoo_data');

// 8. Implemente a função getSchedule
// A função é responsável por disponibilizar as informações de horário dos animais em uma consulta para o usuário, que pode querer ter acesso ao cronograma da semana, de um dia ou de um animal em específico.

// Observações técnicas
// Analise os testes unitários para entender os retornos que são esperados para esta função;
// Quebre o problema em funções menores para que fique mais simples de administrar a responsabilidade de cada uma delas.
// O que será avaliado

// Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
// Com parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;
// Se um único dia for passado, retorna os horários para aquele dia e quais animais estarão disponíveis; OK
// Se o nome de um animal for passado, deverá retornar um array com os dias em que ele estará em exibição.

function getScheduleDay(day) {
  const { open, close } = data.hours[day];

  const exhibition = [];

  data.species.forEach((specie) => {
    const isExhibit = specie.availability.find((weekDay) => weekDay === day);

    if (isExhibit) {
      exhibition.push(specie.name);
    }
  });

  return {
    [day]: {
      officeHour: open === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`,
      exhibition: open === 0 ? 'The zoo will be closed!' : exhibition,
    },
  };
}

function getCompleteSchedule() {
  const completeSchedule = {};

  Object.entries(data.hours).forEach(([day, dayHours]) => {
    const exhibition = [];
    const { open, close } = dayHours;

    data.species.forEach((specie) => {
      const isExhibit = specie.availability.find((weekDay) => weekDay === day);
      if (isExhibit) exhibition.push(specie.name);
    });

    completeSchedule[day] = {
      officeHour: open === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`,
      exhibition: open === 0 ? 'The zoo will be closed!' : exhibition,
    };
  });

  return completeSchedule;
}

function getSchedule(scheduleTarget) {
  const isWeekDay = Object.keys(data.hours).includes(scheduleTarget);
  const animal = data.species.find((specie) => specie.name === scheduleTarget);
  if (isWeekDay) return getScheduleDay(scheduleTarget);
  if (animal) return animal.availability;
  return getCompleteSchedule();
}

getSchedule();

module.exports = getSchedule;
