const data = require('../data/zoo_data');

function getId(parametro) {
  const resposta = data.employees.reduce((id, pessoa) => {
    if (
      pessoa.id === parametro.id
      || pessoa.firstName === parametro.name
      || pessoa.lastName === parametro.name
    ) {
      // id = pessoa.id;
      return pessoa.id
    }
    return id;
  }, '');
  return resposta;
}

function getName(parametro) {
  const resposta = data.employees.reduce((nomeCompleto, pessoa) => {
    if (
      pessoa.id === parametro.id
      || pessoa.firstName === parametro.name
      || pessoa.lastName === parametro.name
    ) {
      // nomeCompleto = `${pessoa.firstName} ${pessoa.lastName}`;
      return `${pessoa.firstName} ${pessoa.lastName}`;
    }
    return nomeCompleto;
  }, '');
  return resposta;
}

function getSpecies(parametro) {
  const idAnimais = data.employees.reduce((animais, pessoa) => {
    if (
      pessoa.id === parametro.id
      || pessoa.firstName === parametro.name
      || pessoa.lastName === parametro.name
    ) {
      // animais = pessoa.responsibleFor;
      return pessoa.responsibleFor;
    }
    return animais;
  }, []);
  const nomeAnimais = data.species.reduce((listaNomes, animal) => {
    if (idAnimais.includes(animal.id)) {
      listaNomes.push(animal.name);
    }
    return listaNomes;
  }, []);
  return nomeAnimais;
}

function getLocations(parametro) {
  const resposta = [];
  getSpecies(parametro).forEach((animalDaPessoa) => {
    data.species.forEach((animal) => {
      if (animal.name === animalDaPessoa) {
        resposta.push(animal.location);
      }
    });
  });
  return resposta;
}

function respostaFinal(parametro) {
  const resposta = {
    id: `${getId(parametro)}`,
    fullName: `${getName(parametro)}`,
    species: getSpecies(parametro),
    locations: getLocations(parametro),
  };
  return resposta;
}

function getEmployeesCoverage(parametro) {
  if (parametro === undefined) {
    const respostaTodos = [];
    data.employees.forEach((pessoa) => {
      respostaTodos.push(respostaFinal({ name: `${pessoa.firstName}` }));
    });
    return respostaTodos;
  }
  if (data.employees.find((empregado) => empregado.id === parametro.id)) {
    return respostaFinal(parametro);
  }
  if (data.employees.find((empregado) => empregado.firstName === parametro.name)) {
    return respostaFinal(parametro);
  }
  if (data.employees.find((empregado) => empregado.lastName === parametro.name)) {
    return respostaFinal(parametro);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
