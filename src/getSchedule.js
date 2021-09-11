const data = require('../data/zoo_data');

const calendario = {
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

function getSchedule(dayName) {
  let resposta = {};
  const diasDaSemana = Object.keys(calendario);
  const animais = data.species.map((animal) => animal.name);
  if (dayName === undefined || (!diasDaSemana.includes(dayName) && !animais.includes(dayName))) {
    resposta = calendario;
  } else if (diasDaSemana.includes(dayName)) {
    resposta[dayName] = calendario[dayName];
  } else {
    resposta = Object.keys(calendario).filter((dia) => {
      const respostaFilter = calendario[dia].exhibition.includes(dayName);
      return respostaFilter;
    });
  }
  return resposta;
}

module.exports = getSchedule;
