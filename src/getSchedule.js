const data = require('../data/zoo_data');

const { hours, species } = data;
const daysOn = Object.keys(hours);
const daysOfWeek = Object.values(hours);

function getAllDaysInformations() { // Retorna um objeto com todas as informações da programação do zoo.
  const objWithAnimalsByDay = daysOn.reduce((acc, day, index) => {
    if (day === 'Monday') {
      acc[day] = {
        'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!',
      }
      return acc;
    }
    acc[day] = {
      'officeHour': `Open from ${daysOfWeek[index].open}am until ${daysOfWeek[index].close}pm`,
      'exhibition': [],
    };
    const verifyHowManyAnimalsByDay = species.filter((animal) => animal.availability.includes(day))
    .map((animalFiltered) => animalFiltered.name);
    acc[day].exhibition.push(...verifyHowManyAnimalsByDay);
    return acc;
  }, {})
  return objWithAnimalsByDay;
}

function verifyAnimalOrDay(animalOrDay) { // Verifica se o parâmetro passado é um dia ou o nome de um animal.
  const days = Object.keys(hours);
  days.push(...species.map((animal) => animal.name));
  return days.some((dayOrAnimal) => dayOrAnimal === animalOrDay);
}

function scheduleBySearch(string) {
  if (daysOn.includes(string)) {
    return {
      [string]: getAllDaysInformations()[string],
    }
  }
  const verifyAnimal = species.find((beast) => beast.name === string);
  return verifyAnimal.availability;
}
console.log(scheduleBySearch('Tuesday'));
function getSchedule(scheduleTarget) { // Função principal! Retorna a programação do zoo de acordo com o que o usuário indicar(dia e animal), caso contrario retorna a programação da semana inteira.
  if (scheduleTarget === 'Monday') return { 'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },
};
  if (verifyAnimalOrDay(scheduleTarget) === true) return scheduleBySearch(scheduleTarget);
  return getAllDaysInformations();
}

module.exports = getSchedule;
