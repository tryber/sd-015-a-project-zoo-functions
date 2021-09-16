const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  let animaisPessoa = data.employees.map((pessoa) => {
    if(id === pessoa.id) {
      
    }})
  // os animais do id
  //  .forEach em todos esses amimais
  //  .find o mais velho
  let maisVelho = data.species.find()
  
}

module.exports = getOldestFromFirstSpecies;

// getOldestFromFirstSpecies(employeeId)
// const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
// const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
// const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

// 'passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie'

// const expected = [
//   ['Maxwell', 'male', 15],
//   ['Maxwell', 'male', 15],
//   ['Margherita', 'female', 10],
//   ['Bill', 'male', 6],
//   ['Margherita', 'female', 10],
//   ['Margherita', 'female', 10],
//   ['Shu', 'female', 19],
//   ['Maxwell', 'male', 15],
// ];