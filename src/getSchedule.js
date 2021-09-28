const data = require('../data/zoo_data');

function semParametro() {
  const { species } = data;
  const { hours } = data;
  const resultado = {};
  const filterHours = Object.entries(hours);

  filterHours.forEach((valor) => {
    const filtrarAnimaisNome = species.filter((objeto) => objeto.availability.includes(valor[0]));
    const arrayAnimais = filtrarAnimaisNome.map((elemento) => elemento.name);

    resultado[valor[0]] = {
      officeHour: `Open from ${valor[1].open}am until ${valor[1].close}pm`,
      exhibition: arrayAnimais,
    };
  });
  return resultado;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (scheduleTarget === undefined) {
    const retorno = semParametro();
    retorno.Monday.exhibition = 'The zoo will be closed!';
    retorno.Monday.officeHour = 'CLOSED';
    return retorno;
  }
}

module.exports = getSchedule;
