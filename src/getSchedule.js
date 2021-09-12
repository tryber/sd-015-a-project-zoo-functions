const data = require('../data/zoo_data');

function horarios(abre, fecha) {
  return abre === fecha && abre === 0 ? 'CLOSED' : `Open from ${abre}am until ${fecha}pm`;
}

function animaisExibidos(dia) {
  let retorno;
  if (dia !== 'Monday') {
    retorno = data.species.filter((animal) => animal.availability.includes(dia)).map((bixo) => {
      const retornoMap = bixo.name;
      return retornoMap;
    });
  } else {
    retorno = 'The zoo will be closed!';
  }
  return retorno;
}

function valorCalendario(dia) {
  return {
    officeHour: horarios(data.hours[dia].open, data.hours[dia].close),
    exhibition: animaisExibidos(dia),
  };
}

function contruirCalendario(day = 0) {
  const resposta = {};
  if (day === 0) {
    Object.keys(data.hours).forEach((dia) => {
      resposta[dia] = valorCalendario(dia);
    });
  } else {
    resposta[day] = valorCalendario(day);
  }
  return resposta;
}

function getSchedule(dayName) {
  let resposta = {};
  const diasDaSemana = Object.keys(data.hours);
  const animais = data.species.map((animal) => animal.name);
  if (dayName === undefined || (!diasDaSemana.includes(dayName) && !animais.includes(dayName))) {
    resposta = contruirCalendario();
  } else if (diasDaSemana.includes(dayName)) {
    resposta = contruirCalendario(dayName);
  } else {
    resposta = data.species.find((bixo) => bixo.name === dayName).availability;
  }
  return resposta;
}

module.exports = getSchedule;
