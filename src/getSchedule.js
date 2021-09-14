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

const getDaysAndAnimals = (parameter) => {
  if (getAnimalName.includes(parameter)) {
    return getDaysByAnimal(parameter);
  }
  if (Object.keys(data.hours).includes(parameter)) {
    return {
      [parameter]: {
        officeHour: `Open from ${dtH[parameter].open}am until ${dtH[parameter].close}pm`,
        exhibition: getAnimalsByDay(parameter),
      },
    };
  }
}

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
  if (getAnimalName.includes(scheduleTarget)
    || Object.keys(data.hours).includes(scheduleTarget)) {
    return getDaysAndAnimals(scheduleTarget);
  }
}

module.exports = getSchedule;
