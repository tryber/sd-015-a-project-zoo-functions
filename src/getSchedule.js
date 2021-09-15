const data = require('../data/zoo_data');

const { species, hours } = data;

const animals = species.map((element) => element.name);

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const wichDay = (day) => {
  const anml = species.filter((an) => an.availability.some((element) => element === day));

  const hour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;

  if (day === 'Monday') return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

  return { officeHour: hour, exhibition: anml.map((element) => element.name) };
};

const zooSchedule = {
  Tuesday: wichDay('Tuesday'),
  Wednesday: wichDay('Wednesday'),
  Thursday: wichDay('Thursday'),
  Friday: wichDay('Friday'),
  Saturday: wichDay('Saturday'),
  Sunday: wichDay('Sunday'),
  Monday: wichDay('Monday'),
};

function getSchedule(scheduleTarget = '') {
  if (!scheduleTarget) return zooSchedule;

  if (!animals.some((element) =>
    element === scheduleTarget)
  && !weekDays.some((element) =>
    element === scheduleTarget)) { return zooSchedule; }

  if (animals.some((element) =>
    element === scheduleTarget)) {
    return species.find((element) =>
      element.name === scheduleTarget).availability;
  }

  return { [scheduleTarget]: wichDay(scheduleTarget) };
}

console.log(getSchedule('penguins'));

module.exports = getSchedule;
