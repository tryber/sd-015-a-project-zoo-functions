const data = require('../data/zoo_data');


function getOfficeHour(scheduleTarget) {
  if (scheduleTarget === 'Tuesday' || scheduleTarget === 'Wednesday') {
    return 'Open from 8am until 6pm';
  }
  if (scheduleTarget === 'Thursday' || scheduleTarget === 'Friday') {
    return 'Open from 10am until 8pm';
  }
  if (scheduleTarget === 'Saturday') {
    return 'Open from 8am until 10pm';
  }
  else {
    return 'Open from 8am until 8pm';
  }
}

function getAnimals(animals) {
  if (animals.length !== 0) {
    return {
      [scheduleTarget]: {
        officeHour: getOfficeHour(scheduleTarget),
        exhibition: animals,
      }
    }
  }
  let animal = data.species.find((y) => y.name === scheduleTarget);

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

  return getAnimals(animals);
}

function getTodosOsDias() {

  const Tuesday = getSchedule('Tuesday');
  const Wednesday = getSchedule('Wednesday');
  const Thursday = getSchedule('Thursday');
  const Friday = getSchedule('Friday');
  const Saturday = getSchedule('Saturday');
  const Sunday = getSchedule('Sunday');

  return [
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  ]
}

module.exports = getSchedule;
