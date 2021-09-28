const data = require('../data/zoo_data');
// gostaria de agradecer ao Lucas Felipe - repositorio consultado
// https://github.com/tryber/sd-015-a-project-zoo-functions/pull/141/files

// exporta hours e species para não ficar usando data.
const { hours, species } = require('../data/zoo_data');

const nomeAnimais = species.map((objeto) => objeto.name);
const diasDaSemana = Object.keys(hours);

// retorna horarios disponiveis do animal passado
function animalAvailability(animal) {
  return species.find((objAnimal) => objAnimal.name === animal).availability;
}

// retorna horario comercial de funcionamento ou se está fechado
function horarioComercial(dia) {
  const horarioDodia = Object.values(hours[dia]);
  // Unico caso onde está fechado Monday
  if (horarioDodia[0] === 0) {
    return 'CLOSED';
  }
  return `Open from ${horarioDodia[0]}am until ${horarioDodia[1]}pm`;
}
// retorna animais disponiveis ou se o zoo ta fechado
function animaisdiponiveis(dia) {
  // retorna todos os animais que tem o 'dia' incluido em seu availability
  const aDisponivel = species.filter((objAnimal) => objAnimal.availability.includes(dia));
  // unico dia que esta fechado
  if (dia === 'Monday') {
    return 'The zoo will be closed!';
  }
  // retorna array com todos os nomes dos animais filtrados.
  return aDisponivel.map((chaveName) => chaveName.name);
}

// retorna resultado que é um objeto com a chave diaSemana, que tem os valores um objeto de chaves officeHour e exhibition
// officeHour recebe horario comercial se esta aberto ou fechado
// exhibition recebe disponiveis naquele dia
function dayAvailability(diaSemana) {
  const resultado = {};
  resultado[diaSemana] = {
    officeHour: horarioComercial(diaSemana),
    exhibition: animaisdiponiveis(diaSemana),
  };
  return resultado;
}
function vazioOuQualquerCOisa() {
  const resultado = {};
  // percorre todos dias da semana prenchendo resultado com a chave dia e seus respectivos horariosComercial e animaisDisponiveis
  diasDaSemana.forEach((dia) => {
    resultado[dia] = {
      officeHour: horarioComercial(dia),
      exhibition: animaisdiponiveis(dia),
    };
  });
  return resultado;
}

function getSchedule(scheduleTarget) {
  // caso animal
  if (nomeAnimais.includes(scheduleTarget)) {
    return animalAvailability(scheduleTarget);
  }
  // caso dia
  if (diasDaSemana.includes(scheduleTarget)) {
    return dayAvailability(scheduleTarget);
  }
  // caso vaziou ou qualquer coisa != de animal e dia
  return vazioOuQualquerCOisa();
}

module.exports = getSchedule;
