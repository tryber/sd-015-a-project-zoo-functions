const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function standardSchedule() {
  const today = {};
  const openHours = Object.values(hours);
  const days = Object.keys(hours);

  for (let i = 0; i < days.length - 1; i += 1) {
    today[days[i]] = {
      officeHour: `Open from ${openHours[i].open}am until ${openHours[i].close}pm`,
      exhibition: species.filter((a) => a.availability.includes(days[i])).map((b) => b.name),
    };
  }
  today.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return today;
}

function isMonday() {
  return {
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
}

function isOpenDay(day) {
  const today = {};
  const exhibition = species.filter((a) => a.availability.includes(day)).map((b) => b.name);
  const openHours = Object.values(hours);
  const days = Object.keys(hours);

  for (let i = 0; i < days.length; i += 1) {
    if (days[i] === day) {
      today[day] = {
        officeHour: `Open from ${openHours[i].open}am until ${openHours[i].close}pm`,
        exhibition,
      };
    }
  }
  return today;
}

function isAnimal(animal) {
  const creature = species.find((creat) => creat.name === animal);
  return creature.availability;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  const weekDays = Object.keys(hours);
  const animals = species.map((a) => a.name);

  if (animals.includes(scheduleTarget)) {
    return isAnimal(scheduleTarget);
  }

  if (scheduleTarget === 'Monday') {
    return isMonday();
  }

  if (weekDays.includes(scheduleTarget)) {
    return isOpenDay(scheduleTarget);
  }

  return standardSchedule();
}

module.exports = getSchedule;

// Código utilizado da PR do Lucas Pontes
// link: https://github.com/tryber/sd-015-a-project-zoo-functions/pull/132/files
