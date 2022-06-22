//Considering these factors [average mpg, distance to pump, fuel left], write a function that tells you if it is possible to get to the pump or not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= fuelLeft*mpg
};
