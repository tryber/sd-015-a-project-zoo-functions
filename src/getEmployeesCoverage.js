const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

function calculo() {
  const arr = [];
  const allEmployees = data.employees.forEach((funcionario) => {
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
  console.log(allEmployees);
  return arr;
}

function calUmFunc(idName) {
  const allEmployees = data.employees.find((funcionario) => funcionario);
  // const { id } = idName;
  // funcionario.id === id;
  const { id } = allEmployees;
  const fullName = (`${allEmployees.firstName} ${allEmployees.lastName}`);
  const objFinal = {
    id,
    fullName,
    species: getSpeciesByIds(...allEmployees.responsibleFor).map((animal) => animal.name),
    locations: getSpeciesByIds(...allEmployees.responsibleFor)
      .map((animal) => animal.location),
  };
  return objFinal;
}

function getEmployeesCoverage(pessoaFunc) {
  if (!pessoaFunc) { return calculo(); }
  return calUmFunc(pessoaFunc);
}
console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
module.exports = getEmployeesCoverage;

// const animQtomaConta = data.species.map((obj) => obj);
// const animaisQtomaConta = (funcionario.responsibleFor === data.species.id);
// const nameAnimal = getSpeciesByIds(...funcionario.responsibleFor[0]).forEach((element) => element.name);
// return fullNam.includes(pessoaFunc.name) || funcionario.id.includes(pessoaFunc.id);
