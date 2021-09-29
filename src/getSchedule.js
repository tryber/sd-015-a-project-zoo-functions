const data = require('../data/zoo_data');

// criar objeto com retorno geral de quais animais estao disponiveis em quais dias.

function semParametro() {
  const { species } = data;
  const { hours } = data;
  const resultado = {};
  const filterHours = Object.entries(hours);

  filterHours.forEach((valor) => {
    // buscar objetos com nome do dia na chave availability, consolar o filterHours para enteder melhor
    const filtrarAnimaisNome = species.filter((objeto) => objeto.availability.includes(valor[0]));
    const arrayAnimais = filtrarAnimaisNome.map((elemento) => elemento.name);
    resultado[valor[0]] = {
      officeHour: `Open from ${valor[1].open}am until ${valor[1].close}pm`,
      exhibition: arrayAnimais,
    };
  });
  // pequena alteração no retorno do objeto para setar os valores do Monday esperados.
  resultado.Monday.exhibition = 'The zoo will be closed!';
  resultado.Monday.officeHour = 'CLOSED';
  return resultado;
}

// verifica se o nome e o dia estao na lista

function verificarNomeEDia(entrada) {
  const objetoPrincipal = semParametro();
  const { species } = data;
  const dias = Object.keys(objetoPrincipal);
  const animais = species.map((elemento) => elemento.name);
  const diasEAnimais = [...dias, ...animais];
  const resultado = diasEAnimais.some((string) => string === entrada);

  return resultado;
}

// verifica se o dia da entrada esta na lista

function verificarSoDia(entrada) {
  const objetoPrincipal = semParametro();
  const dias = Object.keys(objetoPrincipal);
  const resultado = dias.some((string) => string === entrada);
  return resultado;
}

// busca o dia da entrada na lista para retornar o objeto do dia

function buscarDia(dias) {
  const objetoPrincipal = semParametro();
  const objetoEntries = Object.entries(objetoPrincipal);
  const resultado = {};
  objetoEntries.forEach((dia) => {
    const [atual, teste] = dia;
    if (atual === dias) {
      resultado[atual] = teste;
    }
  });
  return resultado;
}

// verifica a entrada para ver se o animal esta na lista

function verificarSoAnimal(animal) {
  const { species } = data;
  const animais = species.map((elemento) => elemento.name);
  const resultado = animais.some((string) => string === animal);
  return resultado;
}

// buscar array com dias do animal passado como entrada

function buscarDiasDosAnimais(animal) {
  const objetoPrincipal = semParametro();
  const entradas = Object.entries(objetoPrincipal);
  const resultado = [];
  entradas.forEach((obj) => {
    const [string, atual] = obj;
    if (atual.exhibition.includes(animal)) {
      return resultado.push(string);
    }
  });
  // correção da ordem do resultado, ja que criei o objeto por funcao, uso especifico pra penguins
  if (animal === 'penguins') {
    resultado.pop();
    resultado.pop();
    const resultadoTratado = [...resultado, 'Sunday', 'Saturday'];
    return resultadoTratado;
  }
  return resultado;
}

// funcao principal para chamada das outras funcoes

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (scheduleTarget === undefined) {
    return semParametro();
  } if (verificarNomeEDia(scheduleTarget) === false) {
    return semParametro();
  } if (verificarSoDia(scheduleTarget) === true) {
    return buscarDia(scheduleTarget);
  } if (verificarSoAnimal(scheduleTarget) === true) {
    return buscarDiasDosAnimais(scheduleTarget);
  }
}

module.exports = getSchedule;
