const data = require("../data/zoo_data");

const animais = data.species;
const horarios = data.hours;

function parametro(scheduleTarget) {
  const dias = {};
  Object.keys(horarios).forEach((key) => {
    dias[key] = {
      officeHour: "",
      exhibition: [],
    };
    const especifico = data.hours[key];
    Object.values(especifico).forEach((cada) => {
      if (key === 'Monday') {
        dias[key].officeHour = 'CLOSED';
      } else {
        dias[
          key
        ].officeHour = `Open from ${especifico.open}am until ${especifico.close}pm`;
      }
    });
    animais.forEach((animal) => {
      if (animal.availability.includes(key)) {
        dias[key].exhibition.push(animal.name);
      } else if (key === 'Monday') {
        dias[key].exhibition = 'The zoo will be closed!';
      }
    });
  });
  return dias;
}

function animaizinhos(scheduleTarget) {
  let respostaAnimal = [];
  animais.forEach((animal) => {
    if (animal.name.includes(scheduleTarget)) {
      respostaAnimal.push(animal.availability);
    }
  });
  return respostaAnimal[0];
}

function diaSemana(scheduleTarget) {
  const animais = data.species;
  const horarios = data.hours;
  let diaDaSemana = {};
  diaDaSemana[scheduleTarget] = {
    officeHour: "",
    exhibition: [],
  };
  let oDia = horarios[scheduleTarget];
  animais.forEach((animal) => {
    if (animal.availability.includes(scheduleTarget)) {
      diaDaSemana[scheduleTarget].exhibition.push(animal.name);
    } else if (scheduleTarget === 'Monday') {
      diaDaSemana[scheduleTarget].exhibition = 'The zoo will be closed!';
    }
  });
  Object.values(oDia).forEach((cada) => {
    if (scheduleTarget === 'Monday') {
      diaDaSemana[scheduleTarget].officeHour = 'CLOSED';
    } else {
      diaDaSemana[
        scheduleTarget
      ].officeHour = `Open from ${oDia.open}am until ${oDia.close}pm`;
    }
  });
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
