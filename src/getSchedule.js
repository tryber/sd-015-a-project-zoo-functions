const data = require('../data/zoo_data');

const weekDays = Object.keys(data.hours);
const animals = Object.values(data.species.map((e) => e.name));

function getAnimalByDay(day) {
  const animalSchedule = data.species.filter((e) => e.availability.includes(day));
  const array = animalSchedule.reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, []);
  return array;
}

const createTable = () => {
  const obj = weekDays.reduce((acc, days, index) => {
    if (weekDays[index].includes(days)) {
      const openHours = Object.values(data.hours[days]);
      acc[days] = Object.values(data.hours[days]).reduce((accumulator) => {
        const result = accumulator;
        if (days === 'Monday') {
          result.exhibition = 'The zoo will be closed!';
          result.officeHour = 'CLOSED';
          return result;
        }
        result.officeHour = `Open from ${openHours[0]}am until ${openHours[1]}pm`;
        result.exhibition = getAnimalByDay(days);
        return result;
      }, {});
    } return acc;
  }, {});
  return obj;
};

function getScheduleByDay(day) {
  const openHours = Object.values(data.hours[day]);
  const teste = createTable();
  const teste2 = Object.entries(teste).find((e) => e.includes(day)).reduce((acc) => {
    acc[day] = Object.values(data.hours[day]).reduce((accumulator) => {
      const result = accumulator;
      if (day === 'Monday') {
        result.officeHour = 'CLOSED';
        result.exhibition = 'The zoo will be closed!';
        return result;
      }
      result.officeHour = `Open from ${openHours[0]}am until ${openHours[1]}pm`;
      result.exhibition = getAnimalByDay(day);
      return result;
    }, {});
    return acc;
  }, {});
  return teste2;
}

function getScheduleByAnimal(animal) {
  const scheduleAnimal = data.species.find((e) => e.name === animal).availability;
  console.log(scheduleAnimal);
  return scheduleAnimal;
}

function animalOrDay(parameter) {
  if (parameter) {
    if (weekDays.includes(parameter)) return getScheduleByDay(parameter);
    if (animals.includes(parameter)) return getScheduleByAnimal(parameter);
  } return createTable();
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return createTable();
  if (scheduleTarget) {
    return animalOrDay(scheduleTarget);
  }
}
module.exports = getSchedule;
