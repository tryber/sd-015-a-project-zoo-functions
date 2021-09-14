const data = require('../data/zoo_data');

function hoursDay(open, close) {
  return open === close && open === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`;
}
// a funcao hoursDay retorna se estadara aberto e o horario dado os parametros

function animalOfTheDay(dia) {
  return data.species.filter((element) => element.availability.includes(dia))
    // passo um filter em species para verificar quais elementos estao disponiveis no dia passado
    .map((element2) => element2.name);
  // .map cria uma array com o nome dos animais q estao disponiveis no dia passado como parametro
}
// a funcao acima retorna o nome dos animais q estao disponives para o dia passado como parametro

function availableAnimal(dia) {
  return (dia !== 'Monday' ? animalOfTheDay(dia) : 'The zoo will be closed!');
}
// chama a funcao que virifica o dia de cada animal e imprime

function fullSchedule(...day) {
  const retorno = {};
  day.forEach((dia) => {
    retorno[dia] = {
      // coloco a chave '[dia]' para ser criada a cada elemento do day
      officeHour: hoursDay(data.hours[dia].open, data.hours[dia].close),
      // chamo a funcao hoursday com o parametro da hora do dia correspondente do elemento
      exhibition: availableAnimal(dia),
      // chamo a funcao para verificar qual animal esta disponivel no dia (day)
    };
  });
  return retorno;
}
// nessa funcao imprimi a schedule padrao da semana

function getSchedule(param) {
  let retorno = {};
  const daysOfWeek = Object.keys(data.hours);
  // crio uma array para armazenar os dias
  const animals = data.species.map((element) => element.name);
  // crio outra array para armazenar todas espcies
  if (param === undefined || (!daysOfWeek.includes(param) && !animals.includes(param))) {
    retorno = fullSchedule(...daysOfWeek);
    // se o valor for nulo ou nao incluir um dos dias da semana e nao incluir nome de animar ele retorna o calentario completo
    // e chama a funcao de monstar calendario com o parametro do dia da semana
  } else if (daysOfWeek.includes(param)) {
    retorno = fullSchedule(param);
    // se o parametro possuir um dos dias da semana ele chama a funcao de criar o calendario com o parametro passado
  } else {
    retorno = data.species.find((element) => element.name === param).availability;
    // caso passe o nome de um animal, retorna apenas o array com os dias das semana que esse animal esta disponivel
  }
  return retorno;
}

module.exports = getSchedule;

// exercicio resolvido com ajuda do repositorio do Marcelo Adriano href: https://github.com/tryber/sd-015-a-project-zoo-functions/pull/8/files
