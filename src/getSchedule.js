const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const fullSchedule = () => {
  const full = {};
  Object.keys(hours).forEach((elem) => {
    const time = hours[elem];
    if (elem === 'Monday') {
      full[elem] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      full[elem] = {
        officeHour: `Open from ${time.open}am until ${time.close}pm`,
        exhibition: species.filter((anim) => anim.availability.includes(elem)).map((x) => x.name),
      };
    }
  });
  return full;
};

const animalOrDay = (scheduleTarget, day, animal) => {
  if (animal) {
    return species.find((anim) => anim.name === scheduleTarget).availability;
  }
  if (day) {
    return { [scheduleTarget]: fullSchedule()[scheduleTarget] };
  }
};

const getSchedule = (scheduleTarget) => {
  const day = Object.keys(hours).includes(scheduleTarget);
  const animal = species.some((elem) => elem.name === scheduleTarget);
  if (animal || day) {
    return animalOrDay(scheduleTarget, day, animal);
  }
  return fullSchedule();
};

module.exports = getSchedule;
