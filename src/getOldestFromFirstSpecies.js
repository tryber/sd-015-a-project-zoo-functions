const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = data.employees.find((functionary) => functionary.id === id); // objeto do funcionario p/ pegar o id da 1a especie gerenciada
  const idEspecieManag = funcionario.responsibleFor[0]; // id da primeira especie gerenciada
  console.log(idEspecieManag);
  const objetoFinal = data.species.find((objeto) => objeto.id === idEspecieManag); // objeto da especie gerenciada
  console.log(objetoFinal);
  const { residents } = objetoFinal;
  const maiorIdade = residents.reduce((montante, idadeAtual) => { // seleciona a posicao de maior valor de idade de residents
    if (montante.age > idadeAtual.age) { return montante; }
    return idadeAtual;
  });
  const saidaFinal = Object.values(maiorIdade);
  console.log(saidaFinal);
  return saidaFinal;
}
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
module.exports = getOldestFromFirstSpecies;
