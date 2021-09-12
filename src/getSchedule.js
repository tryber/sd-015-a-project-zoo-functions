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

function contruirCalendario() {
  const resposta = {};
  Object.keys(data.hours).forEach((dia) => {
    resposta[dia] = {
      officeHour: horarios(data.hours[dia].open, data.hours[dia].close),
      exhibition: animaisExibidos(dia),
    };
  });
  return resposta;
}

function getSchedule(dayName) {
  let resposta = {};
  const calendario = contruirCalendario();
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
