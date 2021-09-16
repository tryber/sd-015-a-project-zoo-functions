const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// requiri os arrays employees[] species[] no doc zoo_data.js

function getOldestFromFirstSpecies(idEmp) {
  const findId = employees.find(({ id }) => id === idEmp);
// ultilizei o find para encontrar o funcionario que tenha o mesmo id que o valor do parâmetro passado.
  const findAnimalEmp = findId.responsibleFor[0];
// peguei dentro do array responsiblefor[] o index [0] para descobrir o primeiro animal que o respectivo funcionário é responsável.
  const findAnimal = species.find(({ id }) => id.includes(findAnimalEmp));
// usei o includes dentro do find para gerar um array com os animais dentro da especie requisitada.
  const oldest = findAnimal.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(oldest);
// usei o sort para achar o animal com menor idade dentro da especie selecionada e retornei os valores do objeto dele.
}

module.exports = getOldestFromFirstSpecies;
