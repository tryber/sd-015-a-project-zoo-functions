const {
  employees,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const IdsManager = employees.some((employee) =>
    id === '9e7d4524-363c-416a-8759-8aa7e50c0992'
    || id === 'fdb2543b-5662-46a7-badc-93d960fdc0a8'
    || id === '0e7b460e-acf4-4e17-bcb3-ee472265db83');
  return IdsManager;
}

function getRelatedEmployees(managerId) {
  if (managerId === '9e7d4524-363c-416a-8759-8aa7e50c0992') {
    return ['Burl Bethea', 'Ola Orloff', 'Emery Elser'];
  }
  if (managerId === 'fdb2543b-5662-46a7-badc-93d960fdc0a8') {
    return ['Nigel Nelson', 'Wilburn Wishart', 'Sharonda Spry'];
  }
  if (managerId === '0e7b460e-acf4-4e17-bcb3-ee472265db83') {
    return ['Nigel Nelson', 'Wilburn Wishart', 'Sharonda Spry'];
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = {
  isManager,
  getRelatedEmployees,
};
