const data = require('../data/zoo_data');

const animais = data.species;
const horarios = data.hours;

function parametro() {
  const dias = {};
  Object.keys(horarios).forEach((key) => {
    dias[key] = { officeHour: '', exhibition: [], };
    const especifico = data.hours[key];
    if (key === 'Monday') {
      dias[key].officeHour = 'CLOSED';
      dias[key].exhibition = 'The zoo will be closed!';
    } else {
      dias[key].officeHour = `Open from ${especifico.open}am until ${especifico.close}pm`;
      animais.forEach((animal) => {
        if (animal.availability.includes(key)) {
          dias[key].exhibition.push(animal.name);
        }
      });
    }
  });
  return dias;
}

function animaizinhos(scheduleTarget) {
  const respostaAnimal = [];
  animais.forEach((animal) => {
    if (animal.name.includes(scheduleTarget)) {
      respostaAnimal.push(animal.availability);
    }
  });
  return respostaAnimal[0];
}

function diaSemana(scheduleTarget) {
  const diaDaSemana = {};
  diaDaSemana[scheduleTarget] = { officeHour: '', exhibition: [], };
  const oDia = horarios[scheduleTarget];
  if (scheduleTarget === 'Monday') {
    diaDaSemana[scheduleTarget].officeHour = 'CLOSED';
    diaDaSemana[scheduleTarget].exhibition = 'The zoo will be closed!';
  } else {
    diaDaSemana[scheduleTarget].officeHour = `Open from ${oDia.open}am until ${oDia.close}pm`;
    animais.forEach((animal) => {
      if (animal.availability.includes(scheduleTarget)) {
        diaDaSemana[scheduleTarget].exhibition.push(animal.name);
      }
    });
  }
  return diaDaSemana;
}

function getSchedule(scheduleTarget) {
  if (animais.some((animal) => animal.name === scheduleTarget)) {
    return animaizinhos(scheduleTarget);
  }
  if (Object.keys(horarios).includes(scheduleTarget)) {
    return diaSemana(scheduleTarget);
  }
  return parametro();
}

module.exports = getSchedule;
