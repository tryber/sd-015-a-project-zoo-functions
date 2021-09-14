const data = require('../data/zoo_data');

function isManager(id) {
  const obj = [];
  data.employees.forEach((element) => {
    obj.push([...element.managers]);
  });
  console.log('obj:', obj);
  const weyrwqur = [];
  obj.forEach((element) => weyrwqur.push(...element));
  console.log('weyrwqur:', weyrwqur);
  return weyrwqur.some((element) => element === id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const y = [];
    const x = data.employees.filter((element) => element.managers.includes(managerId));
    x.forEach((element) => {
      const { firstName } = element;
      const { lastName } = element;
      const a = `${firstName} ${lastName}`;
      y.push(a);
    });
    return y;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

// getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8');
module.exports = { isManager, getRelatedEmployees };
