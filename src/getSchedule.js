const data = require('../data/zoo_data');

const funcHora = (param) => {
  const horaDeAbrir = data.hours[param].open;
  const horaDeFechar = data.hours[param].close;
  if (horaDeAbrir === 0) {
    return 'CLOSED';
  }
  return `Open from ${horaDeAbrir}am until ${horaDeFechar}pm`;
};

const funcExebicoes = (param) => {
  const animaisDoDia = data.species.filter((element) => element.availability.includes(param));
  const listaDeAnimais = animaisDoDia.map((element) => element.name);
  if (param === 'Monday') {
    return 'The zoo will be closed!';
  }
  return listaDeAnimais;
};

function getSchedule(scheduleTarget) {
  const listaDias = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const listaTodosAnimais = data.species.map((element) => element.name);
  const resposta = {};
  for (let index = 0; index < listaDias.length; index += 1) {
    const diaAtual = listaDias[index];
    const chaveDoDiaAtual = { officeHour: funcHora(diaAtual), exhibition: funcExebicoes(diaAtual) };
    resposta[diaAtual] = chaveDoDiaAtual;
  }
  if (listaDias.includes(scheduleTarget) || listaTodosAnimais.includes(scheduleTarget)) {
    if (listaDias.includes(scheduleTarget)) {
      return { [scheduleTarget]: resposta[scheduleTarget] };
    }
    const animalEscolhido = data.species.find((element) => element.name === scheduleTarget);
    return animalEscolhido.availability;
  }
  return resposta;
}

module.exports = getSchedule;
