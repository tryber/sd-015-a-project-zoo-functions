const data = require('../data/zoo_data');

const simpleWay = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};
const forMonday = {
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};
//  Para a criação desta função usei de inspiração o código do Vitor Diorio visto que eu estava com dificuldades de implementala funcionalmente na parte que buscava as species- disponivel em https://github.com/tryber/sd-015-a-project-zoo-functions/pull/93/commits/199f680d891c0c976fd2ca25b4410d10774eccd4

function findDay(day) {
  const finder = {};
  finder[day] = {
    officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
    exhibition: data.species.filter((an) => an.availability.includes(day)).map((sp) => sp.name),
  };
  return finder;
}
function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return simpleWay;
  }
  if (scheduleTarget === 'Monday') {
    return forMonday;
  }
  if (Object.keys(simpleWay).includes(scheduleTarget)) {
    return findDay(scheduleTarget);
  }
  if (data.species.some((animal) => animal.name === scheduleTarget)) {
    const findSpecie = data.species.find((animal) => animal.name === scheduleTarget);
    return findSpecie.availability;
  }
  return simpleWay;
}

module.exports = getSchedule;
