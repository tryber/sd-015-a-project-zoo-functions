const data = require('../data/zoo_data');

const func = (fullName) => {
  const species = data.employees.find((element) => fullName.includes(element.firstName));
  const responsability = species.responsibleFor;
  const objetoDosAnimais = data.species.filter((element) => responsability.includes(element.id));
  const nomeDosAnimais = objetoDosAnimais.map((element) => element.name);
  return nomeDosAnimais;
};

const funcDeLocalizar = (speciesNames) => {
  const objsPorSpecieName = data.species.filter((element) => speciesNames.includes(element.name));
  const localizacoesDosObjs = objsPorSpecieName.map((element) => element.location);
  return localizacoesDosObjs;
};

const funcCondicional = (param, arrayTotal) => {
  const valorDoParam = Object.values(param)[0];
  const paramCheioComName = arrayTotal.filter((element) => element.fullName.includes(valorDoParam));
  const paramCheioComId = arrayTotal.filter((element) => element.id.includes(valorDoParam));
  if (paramCheioComName.length > 0) {
    return paramCheioComName[0];
  }

  if (paramCheioComId.length > 0) {
    return paramCheioComId[0];
  }
  throw new Error('Informações inválidas');
};

function getEmployeesCoverage(param) {
  const arrayTotal = [];
  const ids = data.employees.map((element) => element.id);
  const fullName = data.employees.map((element) => `${element.firstName} ${element.lastName}`);
  for (let index = 0; index < ids.length; index += 1) {
    arrayTotal.push({
      id: ids[index],
      fullName: fullName[index],
      species: func(fullName[index]),
      locations: funcDeLocalizar(func(fullName[index])),
    });
  }
  if (param !== undefined) {
    return funcCondicional(param, arrayTotal);
  }
  return arrayTotal;
}

// console.log(getEmployeesCoverage({ name: 'Oi' }))
module.exports = getEmployeesCoverage;
