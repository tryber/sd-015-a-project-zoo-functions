const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

const calculo = () => {
  const arr = [];
  data.employees.forEach((funcionario) => {
    const { id } = funcionario;
    const fullName = (`${funcionario.firstName} ${funcionario.lastName}`);
    const objFinal = {
      id,
      fullName,
      species: getSpeciesByIds(...funcionario.responsibleFor).map((animal) => animal.name),
      locations: getSpeciesByIds(...funcionario.responsibleFor)
        .map((animal) => animal.location),
    };
    arr.push(objFinal);
  });
  return arr;
};

function getEmployeesCoverage(pessoaFunc) {
  if (!pessoaFunc) { return calculo(); }
  if (calculo().some((funcionario) => funcionario.id === pessoaFunc.id)) {
    return calculo().find((funcionario) => funcionario.id === pessoaFunc.id);
  }
  if (calculo().some((funcionario) => funcionario.fullName.includes(pessoaFunc.name))) {
    return calculo().find((funcionario) => funcionario.fullName.includes(pessoaFunc.name));
  }
  throw new Error('Informações inválidas');
}
console.log(getEmployeesCoverage({ name: 'Sharonda' }));
module.exports = getEmployeesCoverage;
