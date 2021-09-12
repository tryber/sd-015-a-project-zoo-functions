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

function contruirCalendario(...day) {
  const resposta = {};
  day.forEach((dia) => {
    resposta[dia] = {
      officeHour: horarios(data.hours[dia].open, data.hours[dia].close),
      exhibition: animaisExibidos(dia),
    };
  });
  return resposta;
}

function getSchedule(dayName) {
  let resposta = {};
  const diasDaSemana = Object.keys(data.hours);
  const animais = data.species.map((animal) => animal.name);
  if (dayName === undefined || (!diasDaSemana.includes(dayName) && !animais.includes(dayName))) {
    resposta = contruirCalendario(...diasDaSemana);
  } else if (diasDaSemana.includes(dayName)) {
    resposta = contruirCalendario(dayName);
  } else {
    resposta = data.species.find((bixo) => bixo.name === dayName).availability;
  }
  return resposta;
}

module.exports = getSchedule;
