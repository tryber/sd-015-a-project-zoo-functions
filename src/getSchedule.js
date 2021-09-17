const data = require('../data/zoo_data');

function animalSchedule(animalName) {
  return data.species.find((specie) => specie.name === animalName).availability;
}

function daySchedule(chosenDay) {
  if (chosenDay === 'Monday') {
    return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }

  const exhibitionAnimals = [];
  data.species.forEach((specie) => {
    if (specie.availability.includes(chosenDay)) {
      exhibitionAnimals.push(specie.name);
    }
  });

  return {
    officeHour: `Open from ${data.hours[chosenDay].open}am until ${data.hours[chosenDay].close}pm`,
    exhibition: exhibitionAnimals,
  };
}

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// eslint-disable-next-line max-len
const animals = ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'];
const allDaysSchedule = {
  Monday: daySchedule('Monday'),
  Tuesday: daySchedule('Tuesday'),
  Wednesday: daySchedule('Wednesday'),
  Thursday: daySchedule('Thursday'),
  Friday: daySchedule('Friday'),
  Saturday: daySchedule('Saturday'),
  Sunday: daySchedule('Sunday'),
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return allDaysSchedule;
  } if (!(weekDays.includes(scheduleTarget) || animals.includes(scheduleTarget))) {
    return allDaysSchedule;
  } if (animals.includes(scheduleTarget)) {
    return animalSchedule(scheduleTarget);
  }
  return {
    [scheduleTarget]: daySchedule(scheduleTarget),
  };
}

module.exports = getSchedule;
