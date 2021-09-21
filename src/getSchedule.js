const data = require('../data/zoo_data');

const dias = Object.keys(data.hours);
const animais = data.species.map((bichos) => bichos.name);

function horarios() {
  const retorno = {};
  dias.forEach((dia) => {
    retorno[dia] = {
      officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
      exhibition: data.species.filter((b) => b.availability.includes(dia)).map((a) => a.name),
    };
  });
  retorno.Monday.officeHour = 'CLOSED';
  retorno.Monday.exhibition = 'The zoo will be closed!';
  return retorno;
}

// function verifica(parametro) {
//   if (!parametro) {
//     return horarios();
//   }
//   if (dias.every((a) => a !== parametro)) {
//     return horarios();
//   }
//   if (animais.every((a) => a !== parametro)) {
//     return horarios();
//   }
// }

function getSchedule(scheduleTarget) {
  if (dias.includes(scheduleTarget)) {
    const retorno = {};
    retorno[scheduleTarget] = horarios()[scheduleTarget];
    return retorno;
  }
  if (animais.includes(scheduleTarget)) {
    return data.species.find((a) => a.name === scheduleTarget).availability;
  }
  return horarios();
}

module.exports = getSchedule;
