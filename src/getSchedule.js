const data = require('../data/zoo_data');

const fullSchedule = () => {
  const completeInfo = {};
  Object.keys(data.hours).forEach((elem) => {
    const days = data.hours[elem];
    if (elem === 'Monday') {
      completeInfo[elem] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      completeInfo[elem] = {
        officeHour: `Open from ${days.open}am until ${days.close}pm`,
        exhibition: data.species
          .filter((anim) => anim.availability.includes(elem))
          .map((x) => x.name),
      };
    }
  });
  return completeInfo;
};

const animalOrDay = (scheduleTarget, day, animal) => {
  if (animal) {
    return data.species.find((anim) => anim.name === scheduleTarget)
      .availability;
  }
  if (day) {
    return { [scheduleTarget]: fullSchedule()[scheduleTarget] };
  }
};

const getSchedule = (scheduleTarget) => {
  const day = Object.keys(data.hours).includes(scheduleTarget);
  const animal = data.species.some((elem) => elem.name === scheduleTarget);
  if (animal || day) {
    return animalOrDay(scheduleTarget, day, animal);
  }
  return fullSchedule();
};

module.exports = getSchedule;
