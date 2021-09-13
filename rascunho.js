const selectSpecie = species
    .filter((element) => element.name === animal);
    console.log(selectSpecie);
  const selectResidents = species
  .map((element) => element.residents);
    console.log(selectResidents);
  const minAge = selectResidents.some((element) => element.age < age);
    console.log(minAge);
    // return minAge; 