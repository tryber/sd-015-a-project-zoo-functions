// const data = require('../data/zoo_data');

// // Function to receive first or lastname of an employee and return the respective { id, fullName, species and locations }
// function getEmployeeByName(name) {
//   const { employees } = data;
//   let { species } = data;
//   const employeeInfo = employees.find((info) => info.firstName === name || info.lastName === name);
//   const { id } = employeeInfo;
//   const fullName = `${employeeInfo.firstName} ${employeeInfo.lastName}`;
//   const spcIds = employeeInfo.responsibleFor;
//   const spcNames = species.filter((spc) => spcIds.includes(spc.id)).map((info) => info.name);
//   const locations = species.filter((spc) => spcIds.includes(spc.id)).map((info) => info.location);
//   species = spcNames;
//   return { id, fullName, species, locations };
// }

// // Function to receive an id of an employee and return the respective { id, fullName, species and locations }
// function getEmployeeById(id) {
//   const { employees } = data;
//   let { species } = data;
//   const employeeInfo = employees.find((info) => info.id === id);
//   const fullName = `${employeeInfo.firstName} ${employeeInfo.lastName}`;
//   const spcIds = employeeInfo.responsibleFor;
//   const spcNames = species.filter((spc) => spcIds.includes(spc.id)).map((info) => info.name);
//   const locations = species.filter((spc) => spcIds.includes(spc.id)).map((info) => info.location);
//   species = spcNames;
//   return { id, fullName, species, locations };
// }

// // Function to return all the employees formated as { id, fullName, species, locations }
// function getAllEmployees() {
//   const { employees } = data;
//   return employees.map((employee) => {
//     const { id } = employee;
//     const fullName = `${employee.firstName} ${employee.lastName}`;
//     const Ids = employee.responsibleFor;
//     const species = data.species.filter((sp) => Ids.includes(sp.id)).map((info) => info.name);
//     const locations = data.species.filter((sp) => Ids.includes(sp.id)).map((info) => info.location);
//     return { id, fullName, species, locations };
//   });
// }

// // Main function to call each function above
// function getEmployeesCoverage({ name = false, id = false } = {}) {
//   const ids = data.employees.map((employee) => employee.id);
//   const firstNames = data.employees.map((employee) => employee.firstName);
//   const lastNames = data.employees.map((employee) => employee.lastName);
//   if (!name && !id) return getAllEmployees();
//   if (firstNames.includes(name) || lastNames.includes(name) || ids.includes(id)) {
//     if (name) return getEmployeeByName(name);
//     if (id) return getEmployeeById(id);
//   }
//   throw new Error('Informações inválidas');
// }

// module.exports = getEmployeesCoverage;
