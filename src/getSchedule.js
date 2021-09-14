const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animalsName = species.map((item) => item.name);
const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const getDay = (day) => {
  const animals = species.filter((anim) => anim.availability.some((item) => item === day));
  const hour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  if (day === 'Monday') return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return { officeHour: hour, exhibition: animals.map((item) => item.name) };
};

const schedule = {
  Tuesday: getDay('Tuesday'),
  Wednesday: getDay('Wednesday'),
  Thursday: getDay('Thursday'),
  Friday: getDay('Friday'),
  Saturday: getDay('Saturday'),
  Sunday: getDay('Sunday'),
  Monday: getDay('Monday'),
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (!scheduleTarget) return schedule;
  if (!animalsName.some((item) => scheduleTarget === item)
  && !days.some((item) => scheduleTarget === item)) return schedule;
  if (animalsName.some((item) => scheduleTarget === item)) {
    return species.find((element) => element.name === scheduleTarget).availability;
  }
  return { [scheduleTarget]: getDay(scheduleTarget) };
}

module.exports = getSchedule;
