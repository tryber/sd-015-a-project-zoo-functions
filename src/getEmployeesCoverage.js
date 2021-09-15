const data = require('../data/zoo_data');

// {
//   "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
//   "fullName": "Sharonda Spry", // nome completo: firstName + lastName
//   "species": [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
//   "locations": [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
// }

const procuraFuncionario = (chave, valor) => {
  if (chave === 'name') {
    return data.employees
      .find((funcionario) => funcionario.firstName === valor || funcionario.lastName === valor);
  }
  return data.employees.find((funcionario) => funcionario.id === valor);
};

const retornaLocalizacao = (idDosBichos) => {
  const localizacao = [];
  const bichos = [];
  idDosBichos.forEach((id) => bichos.push(data.species.find((bicho) => bicho.id === id)));
  bichos.forEach((bicho) => localizacao.push(bicho.location));
  return localizacao;
};

const retornaEspecies = (funcionario) => {
  const especies = [];
  funcionario.responsibleFor.forEach((id) => {
    data.species.forEach((especie) => {
      if (especie.id === id) {
        especies.push(especie.name);
      }
    });
  });
  return especies;
};

const criaObjeto = (funcinario) => ({
  id: funcinario.id,
  fullName: `${funcinario.firstName} ${funcinario.lastName}`,
  species: retornaEspecies(funcinario),
  locations: retornaLocalizacao(funcinario.responsibleFor),
});

function getEmployeesCoverage(chave) {
  if (!chave) {
    const todos = [];
    data.employees.forEach((funcionario) => {
      todos.push(getEmployeesCoverage({ id: funcionario.id }));
    });
    return todos;
  }
  const tipo = Object.keys(chave)[0];
  const valor = Object.values(chave)[0];
  const funcionario = procuraFuncionario(tipo, valor);
  if (funcionario === undefined) {
    throw new Error('Informações inválidas');
  }
  return criaObjeto(funcionario);
}

console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

module.exports = getEmployeesCoverage;
