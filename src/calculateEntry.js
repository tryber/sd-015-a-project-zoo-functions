const data = require('../data/zoo_data');

/* const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]; */

function countEntrants(entrants) {
  if (entrants === undefined) return 0; // se não tem entrants..é undefined..é =0
  if (Object.entries(entrants).length === 0) return [];// se o objeto tem entradas ===0, são vazias
  const child = entrants.filter((person) => person.age < 18).length;
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const senior = entrants.filter((person) => person.age >= 50).length;

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  /*  if (!entrants) return 0; // se não tem entrants..é undefined..é =0
  if (Object.entries(entrants).length === 0) return 0;// se o objeto tem entradas ===0, são vazias */
  /* const valorChild = countEntrants(entrants).child * data.prices.child;
  const valorAdult = countEntrants(entrants).adult * data.prices.adult;
  const valorSenior = countEntrants(entrants).senior * data.prices.senior;
  const soma = valorChild + valorAdult + valorSenior;
  return soma; */
  const totalVisitors = Object.entries(countEntrants(entrants));// const recebe como entradas do objeto a função countEntrants e seu parametro
  const { prices } = data;// const recebe o data.prices
  return totalVisitors.reduce((acc, curr) => acc + (prices[curr[0]] * curr[1]), 0);// return reduce da const totalVisitors onde o valor corrente vai se multiplicando e é armazenado...se não receber valor é 0.
  // consulta ao pullrequest da colega Tamyres.
}

module.exports = { calculateEntry, countEntrants };
