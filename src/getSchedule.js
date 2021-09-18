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
      acc[days] = Object.values(data.hours[days]).reduce((acumulator) => {
        if (days === 'Monday') {
          acumulator.exhibition = 'The zoo will be closed!';
          acumulator.officeHour = 'CLOSED';
          return acumulator;
        }
        acumulator.officeHour = `Open from ${openHours[0]}am until ${openHours[1]}pm`;
        acumulator.exhibition = getAnimalByDay(days);
        return acumulator;
      }, {});
      return acc;
    }
  }, {});
  return obj;
};

function getScheduleByDay(day) {
  const openHours = Object.values(data.hours[day]);
  const teste = createTable();
  const teste2 = Object.entries(teste).find((e) => e.includes(day)).reduce((acc) => {
    acc[day] = Object.values(data.hours[day]).reduce((accumulator) => {
      if (day === 'Monday') {
        accumulator.officeHour = 'CLOSED';
        accumulator.exhibition = 'The zoo will be closed!';
        return accumulator;
      }
      accumulator.officeHour = `Open from ${openHours[0]}am until ${openHours[1]}pm`;
      accumulator.exhibition = getAnimalByDay(day);
      return accumulator;
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

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return createTable();
  if (scheduleTarget) {
    if (weekDays.includes(scheduleTarget)) return getScheduleByDay(scheduleTarget);
    if (animals.includes(scheduleTarget)) return getScheduleByAnimal(scheduleTarget);
  } return createTable();
}
module.exports = getSchedule;
