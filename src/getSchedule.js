const data = require('../data/zoo_data');

const { species, hours } = data;

const getScheduleByDay = (day) => {
  if (day === 'Monday') {
    return {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }

  const { open } = hours[day];
  const { close } = hours[day];

  const exhibit = species
    .filter((specie) => specie.availability.includes(day))
    .map((animal) => animal.name);

  return {
    officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: exhibit,
  };
};

const getScheduleByAnimal = (animal) => {
  const scheduledAnimal = species.find((specie) => specie.name === animal);
  return scheduledAnimal.availability;
};

function getSchedule(scheduleTarget) {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  if (weekDays.some((day) => day === scheduleTarget)) {
    return {
      [scheduleTarget]: getScheduleByDay(scheduleTarget),
    };
  }
  if (species.some((specie) => specie.name === scheduleTarget)) {
    return getScheduleByAnimal(scheduleTarget);
  }
  return {
    Monday: getScheduleByDay('Monday'),
    Tuesday: getScheduleByDay('Tuesday'),
    Wednesday: getScheduleByDay('Wednesday'),
    Thursday: getScheduleByDay('Thursday'),
    Friday: getScheduleByDay('Friday'),
    Saturday: getScheduleByDay('Saturday'),
    Sunday: getScheduleByDay('Sunday'),
  };
}

module.exports = getSchedule;

/*
8. Implemente a função getSchedule
A função é responsável por disponibilizar as informações de horário dos animais em uma consulta para o usuário, que pode querer ter acesso ao cronograma da semana, de um dia ou de um animal em específico.

Observações técnicas

Analise os testes unitários para entender os retornos que são esperados para esta função;
Quebre o problema em funções menores para que fique mais simples de administrar a responsabilidade de cada uma delas.
O que será avaliado

Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
Com parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;
Se um único dia for passado, retorna os horários para aquele dia e quais animais estarão disponíveis;
Se o nome de um animal for passado, deverá retornar um array com os dias em que ele estará em exibição.
*/
