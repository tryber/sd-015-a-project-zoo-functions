const data = require('../data/zoo_data');

const animais = data.species;
const horarios = data.hours;

function preencheExhibition(key, dias) {
  animais.forEach((animal) => {
    if (animal.availability.includes(key)) {
      dias[key].exhibition.push(animal.name);
    } else if (key === 'Monday') {
      dias[key].exhibition = 'The zoo will be closed!';
    }
  });
}

function preencheOfficeHour(especifico, key, dias) {
  Object.values(especifico).forEach((cada) => {
    if (key === 'Monday') {
      dias[key].officeHour = 'CLOSED';
    } else {
      dias[
        key
      ].officeHour = `Open from ${especifico.open}am until ${especifico.close}pm`;
    }
  });
}

function parametro(scheduleTarget) {
  const dias = {};
  Object.keys(horarios).forEach((key) => {
    dias[key] = {
      officeHour: '',
      exhibition: [],
    };
    const especifico = data.hours[key];
    preencheOfficeHour(especifico, key, dias);
    preencheExhibition(key, dias);
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

function exhibitionDiaDaSemana(scheduleTarget, diaDaSemana) {
  animais.forEach((animal) => {
    if (animal.availability.includes(scheduleTarget)) {
      diaDaSemana[scheduleTarget].exhibition.push(animal.name);
    } else if (scheduleTarget === 'Monday') {
      diaDaSemana[scheduleTarget].exhibition = 'The zoo will be closed!';
    }
  });
}

function diaSemana(scheduleTarget) {
  const diaDaSemana = {};
  diaDaSemana[scheduleTarget] = {
    officeHour: '',
    exhibition: [],
  };
  const oDia = horarios[scheduleTarget];
  exhibitionDiaDaSemana(scheduleTarget, diaDaSemana);
  if (scheduleTarget === 'Monday') {
    diaDaSemana[scheduleTarget].officeHour = 'CLOSED';
  } else {
    diaDaSemana[
      scheduleTarget
    ].officeHour = `Open from ${oDia.open}am until ${oDia.close}pm`;
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
  return parametro(scheduleTarget);
}

module.exports = getSchedule;
