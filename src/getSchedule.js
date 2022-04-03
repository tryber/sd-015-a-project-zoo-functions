const data = require('../data/zoo_data');

const { hours } = data;

const animalOrDayCheck = (parameter) => data.species.some((species) => species.name === parameter)
    || Object.keys(data.hours).includes(parameter);

const getFullAgenda = () => {
  const daysOfTheWeek = Object.keys(data.hours);
  const fullAgenda = {};
  for (let i = 0; i < daysOfTheWeek.length; i += 1) {
    fullAgenda[daysOfTheWeek[i]] = {
      officeHour:
        `Open from ${hours[daysOfTheWeek[i]].open}am until ${hours[daysOfTheWeek[i]].close}pm`,
      exhibition: data.species.filter((animal) => animal.availability.includes(daysOfTheWeek[i]))
        .map((names) => names.name),
    };
  }

  fullAgenda.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

  return fullAgenda;
};

const nameAnimals = (animal) => data.species.filter((species) => species.name === animal)
  .map((name) => name.availability)[0];

const dayAgenda = (day) => {
  if (day !== 'Monday') {
    return {
      [day]: {
        officeHour:
          `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: data.species.filter((animal) => animal.availability.includes(day))
          .map((names) => names.name),
      },
    };
  }
  return {
    [day]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget || !animalOrDayCheck(scheduleTarget)) return getFullAgenda();
  if (data.species.some((specie) => specie.name === scheduleTarget)) {
    return nameAnimals(scheduleTarget);
  }
  return dayAgenda(scheduleTarget);
}

module.exports = getSchedule;
