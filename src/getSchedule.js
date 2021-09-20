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
  return 'Open from 8am until 8pm';
}

function getAnimais(scheduleTarget) {
  const animals = data.species
    .filter((x) => x.availability.includes(scheduleTarget)).map((y) => y.name);

  if (animals.length !== 0) {
    return {
      officeHour: getOfficeHour(scheduleTarget),
      exhibition: animals,
    };
  }

  return data.species.find((y) => y.name === scheduleTarget);
}

function getTodosOsDias() {
  const Tuesday = getAnimais('Tuesday');
  const Wednesday = getAnimais('Wednesday');
  const Thursday = getAnimais('Thursday');
  const Friday = getAnimais('Friday');
  const Saturday = getAnimais('Saturday');
  const Sunday = getAnimais('Sunday');
  const Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

  return {
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
    Monday,
  }
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return {
      [scheduleTarget]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!'
      },
    };
  }

  const animal = getAnimais(scheduleTarget);

  if (animal !== undefined) {
    if (animal.officeHour) {
      return {
        [scheduleTarget]: {
          officeHour: animal.officeHour,
          exhibition: animal.exhibition
        }
      };
    }
    else {
      return animal.availability;
    }
  }



  return getTodosOsDias();
}

const actual = getSchedule('lions');
console.log(actual)
module.exports = getSchedule;
