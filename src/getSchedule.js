const data = require('../data/zoo_data');

const { species, hours } = data;

const fullSchedule = () => {
  const scheduleMap = {};
  Object.keys(hours).forEach((day) => {
    const { open, close } = hours[day];
    if (day === 'Monday') {
      scheduleMap[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      scheduleMap[day] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: species.filter(({ availability }) => availability
          .includes(day))
          .map(({ name }) => name),
      };
    }
  });
  return scheduleMap;
};

const animalOrDay = (checkSchedule, day, animal) => {
  if (animal) {
    return species.find(({ name }) => name === checkSchedule).availability;
  }
  if (day) {
    return { [checkSchedule]: fullSchedule()[checkSchedule] };
  }
};

const getSchedule = (checkSchedule) => {
  const day = Object.keys(hours).includes(checkSchedule);
  const animal = species.some(({ name }) => name === checkSchedule);
  if (animal || day) {
    return animalOrDay(checkSchedule, day, animal);
  }
  return fullSchedule();
};

module.exports = getSchedule;
