const data = require('../data/zoo_data');

function createObject(nid, nname, arrayanimais, arraylocal) {
  const nvResult = {
    fullName: nname,
    id: nid,
    locations: arraylocal,
    species: arrayanimais,
  };
  return (nvResult);
}
function selectEntrada(nvnome, nvid) {
  console.log(nvnome);
  if (nvnome !== undefined) {
    return data.employees.filter((name) =>
      name.firstName === nvnome || name.lastName === nvnome);
  }
  if (nvid !== undefined) {
    const aaa = data.employees.filter((id) => id.id === nvid);
    if (aaa.length !== 0) return aaa;
    throw new Error('Informações inválidas');
  }
  return data.employees;
}

function criarobjeto(funcionarios) {
  const narrayFunc = [];
  funcionarios.forEach((element, index) => {
    const nvId = element.id;
    const nvName = `${element.firstName} ${element.lastName}`;
    const idAnimais = [];
    const animais = [];
    const local = [];
    funcionarios[index].responsibleFor.forEach((animalId, index2) => idAnimais.push(animalId));
    idAnimais.forEach((animal) => {
      const arrayAnimalLocal = data.species.filter((name) => name.id === animal);
      arrayAnimalLocal.forEach((nameLocal, index3) => {
        animais.push(arrayAnimalLocal[index3].name);
        local.push(arrayAnimalLocal[index3].location);
      });
    });
    narrayFunc.push(createObject(nvId, nvName, animais, local));
  });
  return narrayFunc;
}

function nvEmployees(nome, id) {
  const funcionarios = selectEntrada(nome, id);
  return criarobjeto(funcionarios);
}

function getEmployeesCoverage(nfuncionarios) {
  if (nfuncionarios === undefined) {
    return nvEmployees();
  }
  if (nfuncionarios !== undefined) {
    // console.log(nvEmployees(nfuncionarios.name, nfuncionarios.id));
    return nvEmployees(nfuncionarios.name, nfuncionarios.id)[0];
  }
}

module.exports = getEmployeesCoverage;
