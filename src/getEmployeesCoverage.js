const data = require('../data/zoo_data');

function buscaLoc(elemento) {
  return data.species.find((element) => element.id === elemento);
}
function retornaObj(a) {
  return { id: a[0].id,
    fullName: `${a[0].firstName} ${a[0].lastName}`,
    species: a[0].responsibleFor.map((element) => buscaLoc(element).name),
    locations: a[0].responsibleFor.map((element) => buscaLoc(element).location),
  };
}
function getEmployeesCoverage(ob = 'diverso') {
  const cond = (el) => el.firstName === ob.name || el.lastName === ob.name || el.id === ob.id;
  const checaNome = data.employees.some(cond);
  if (checaNome) {
    const a = data.employees.filter(cond);
    return retornaObj(a);
  }
  if (ob === 'diverso') {
    const nomes = data.employees.map(({ firstName }) => firstName);
    return nomes.map((element) => {
      const cond1 = (el) => el.firstName === element;
      const a = data.employees.filter(cond1);
      return retornaObj(a);
    });
  }
  throw new Error('Informações inválidas');
}
module.exports = getEmployeesCoverage;
