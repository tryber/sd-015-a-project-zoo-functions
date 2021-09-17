const data = require('../data/zoo_data');

const { species, hours } = data;
const day = Object.keys(hours);

const dia = (days) => species.filter((animal) => animal.availability
  .some((disponibilidade) => disponibilidade === days)).map((specie) => specie.name);

const animal = (bicho) => species.find((nome) => nome.name === bicho).availability;

function geraDias() {
  const monta = day.map((chave) => {
    const newObj = {};
    if (chave === 'Monday') {
      newObj.officeHour = 'CLOSED';
      newObj.exhibition = 'The zoo will be closed!';
    } else {
      newObj.officeHour = `Open from ${hours[chave].open}am until ${hours[chave].close}pm`;
      newObj.exhibition = dia(chave);
    }
    return newObj;
  });
  const objeto = {};
  day.forEach((elemento, i) => {
    objeto[elemento] = monta[i];
  });
  return objeto;
}

function arrumaDia(aDia) {
  const gerar = geraDias();
  const newObj = {};
  newObj[aDia] = gerar[aDia];
  return newObj;
}

function verificador(scheduleTarget) {
  const nome = species.some((bicho) => bicho.name === scheduleTarget);
  const verDia = day.some((diaS) => diaS === scheduleTarget);
  if (nome) return animal(scheduleTarget);
  if (verDia) return arrumaDia(scheduleTarget);
  return geraDias();
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) return geraDias();
  return verificador(scheduleTarget);
}

module.exports = getSchedule;

// não consegui pensar na logica para esta questão, dei uma passeada por funções de colegas e entendi e peguei a logica da função do Guilherme Polippo https://github.com/tryber/sd-015-a-project-zoo-functions/pull/100
