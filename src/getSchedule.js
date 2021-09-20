const data = require('../data/zoo_data');

function getOfficeHourContinue(scheduleTarget) {
  if (scheduleTarget === 'Saturday') {
    return 'Open from 8am until 10pm';
  }
  return 'Open from 8am until 8pm';
}

function getOfficeHour(scheduleTarget) {
  if (scheduleTarget === 'Tuesday' || scheduleTarget === 'Wednesday') {
    return 'Open from 8am until 6pm';
  }
  if (scheduleTarget === 'Thursday' || scheduleTarget === 'Friday') {
    return 'Open from 10am until 8pm';
  }
  return getOfficeHourContinue(scheduleTarget);
}

function getfilters(scheduleTarget) {
  const animals = data.species.filter((x) => x.availability.includes(scheduleTarget))
    .map((y) => y.name);

  return getAnimals(animals, scheduleTarget);
}

function getTodosOsDias() {
  const Tuesday = getfilters('Tuesday');
  const Wednesday = getfilters('Wednesday');
  const Thursday = getfilters('Thursday');
  const Friday = getfilters('Friday');
  const Saturday = getfilters('Saturday');
  const Sunday = getfilters('Sunday');

  return [
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  ];
}

function getAnimals(animals, scheduleTarget) {
  if (animals.length !== 0) {
    return {
      [scheduleTarget]: {
        officeHour: getOfficeHour(scheduleTarget),
        exhibition: animals,
      },
    };
  }
  const animal = data.species.find((y) => y.name === scheduleTarget);

  if (animal !== undefined) {
    return animal.availability;
  }
  return getTodosOsDias();
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return {
      [scheduleTarget]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
  const animals = data.species.filter((x) => x.availability.includes(scheduleTarget))
    .map((y) => y.name);

  return getAnimals(animals, scheduleTarget);
}

module.exports = getSchedule;
