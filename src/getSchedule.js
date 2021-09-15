const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function horasDoDia(aberto, fechado) {
  if ( aberto === 0 && fechado === aberto) {
    return 'CLOSED'
  } else {
    return `Open from ${aberto}am until ${fechado}pm`
  }
}
function animalDaqueleDia(dia) {
  const dias = data.species.filter((element) => element.availability.includes(dia))
  return dias.map((emenlento) => emenlento.name)
}
function verificarODia(dia) {
  if (dia !== 'Monday') {
   return animalDaqueleDia(dia)
  } else {
    return 'The zoo will be closed!'
  }
}
function calendario (...array) {
  const resultado = {};
  array.forEach((elemento) => {
    resultado[elemento] = {
      officeHour: horasDoDia(hours[elemento].open, hours[elemento].close),
      exhibition: verificarODia(elemento)
    }
  })
  return resultado
}
function getSchedule(scheduleTarget) {
  let resultado = {};
  const semana = Object.keys(hours)
  const animais = species.map((elemento) => elemento.name)
  if (scheduleTarget === undefined || (!semana.includes(scheduleTarget) && !animais.includes(scheduleTarget))) {
    resultado = calendario(...semana)
  } else if (semana.includes(scheduleTarget)) {
    resultado = calendario(scheduleTarget)
  } else {
    resultado = species.find((elemento) => elemento.name === scheduleTarget).availability
  } 
  return resultado
}
module.exports = getSchedule;
