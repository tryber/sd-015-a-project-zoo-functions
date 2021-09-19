const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const diaHora = () => Object.entries(hours);

function teste() {
  const resultado = {};
  diaHora().forEach((elemento) => {
    resultado[elemento[0]] = {
      officeHour: `Open from ${elemento[1].open}am until ${elemento[1].close}pm`,
      exhibition: 5 };
  });
  return resultado;
}

console.log(teste());
function getSchedule(scheduleTarget) {
  // seu código aqui
}

module.exports = getSchedule;
