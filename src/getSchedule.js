const data = require('../data/zoo_data');

const monday = {
  Monday: { officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!' },
};

const dtH = data.hours;

const getAnimalsByDay = (day) => data.species.filter((animals) =>
  animals.availability.includes(day)).map((animalSpecies) =>
  animalSpecies.name);

const getDaysByAnimal = (animal) =>
  data.species.filter((days) =>
    days.name === animal)[0].availability;

const getWeekDays = () => {
  const obj = {};
  Object.keys(data.hours).forEach((weekDays) => {
    obj[weekDays] = {
      officeHour: `Open from ${data.hours[weekDays].open}am until ${data.hours[weekDays].close}pm`,
      exhibition: getAnimalsByDay(weekDays),
    };
  });
  obj.Monday = { officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!' };
  return obj;
};

const getAnimalName = data.species.map((names) => names.name);

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return monday;
  }
  if (scheduleTarget === undefined
    || (!getAnimalName.includes(scheduleTarget)
      && !Object.keys(data.hours).includes(scheduleTarget))) {
    return getWeekDays();
  }
  if (getAnimalName.includes(scheduleTarget)) {
    return getDaysByAnimal(scheduleTarget);
  }
  if (Object.keys(data.hours).includes(scheduleTarget)) {
    return {
      [scheduleTarget]: {
        officeHour: `Open from ${dtH[scheduleTarget].open}am until ${dtH[scheduleTarget].close}pm`,
        exhibition: getAnimalsByDay(scheduleTarget),
      },
    };
  }
}

module.exports = getSchedule;
