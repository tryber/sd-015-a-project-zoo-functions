const data = require('../data/zoo_data');

let zooHours = {};

function mondaySchedule(day) {
  if (data.hours[day].open === 0) {
    zooHours[day] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
}

function otherDaysSchedule(day) {
  if (day !== 'Monday') {
    zooHours[day] = {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: data.species.filter((specie) => specie.availability.includes(day))
        .map((animal) => animal.name),
    };
  } else {
    mondaySchedule(day);
  }
}

function generalSchedule() {
  const weekDays = Object.keys(data.hours);
  weekDays.forEach((day) => {
    zooHours[day] = {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: data.species.filter((specie) => specie.availability.includes(day))
        .map((animal) => animal.name),
    };
    mondaySchedule(day);
  });
}

function getSchedule(scheduleTarget) {
  const animals = data.species.map((specie) => specie.name);
  if (scheduleTarget === undefined
    || (!Object.keys(data.hours).includes(scheduleTarget) && !animals.includes(scheduleTarget))) {
    generalSchedule();
    return zooHours;
  }
  if (Object.keys(data.hours).includes(scheduleTarget)) {
    zooHours = {};
    otherDaysSchedule(scheduleTarget);
    return zooHours;
  }
  zooHours = {};
  return data.species.find((specie) => specie.name === scheduleTarget).availability;
}

module.exports = getSchedule;
