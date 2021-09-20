const data = require('../data/zoo_data');
const getEmployeeByName = require('./getEmployeeByName');

function fullCoverage() {
  
}

function getEmployeesCoverage(givenParameter) {
  if (!givenParameter || Object.keys(givenParameter).length === 0) {
    // no param, fullCoverage
  } else {
  const { name: givenName = undefined, id: givenID = undefined } = givenParameter;
  }
}

module.exports = getEmployeesCoverage;
