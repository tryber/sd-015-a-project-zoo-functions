const { species, hours } = require('../data/zoo_data');

const zooSchedule = () => {
  const schedule = {};
  Object.keys(hours).forEach((elem) => {
    const hour = hours[elem];
    if (elem === 'Monday') {
      schedule[elem] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      schedule[elem] = { officeHour: `Open from ${hour.open}am until ${hour.close}pm`,
        exhibition: species.filter((animal) =>
          animal.availability.includes(elem)).map((a) => a.name),
      };
    }
  });
  return schedule;
};

const withParam = (scheduleTarget, day, animal) => {
  if (animal) {
    return species.find((ani) => ani.name === scheduleTarget).availability;
  }
  if (day) {
    return { [scheduleTarget]: zooSchedule()[scheduleTarget] };
  }
};

const getSchedule = (scheduleTarget) => {
  const getDay = Object.keys(hours).includes(scheduleTarget);
  const getAnimal = species.some((elem) => elem.name === scheduleTarget);
  if (getAnimal || getDay) {
    return withParam(scheduleTarget, getDay, getAnimal);
  }
  return zooSchedule();
};
module.exports = getSchedule;
