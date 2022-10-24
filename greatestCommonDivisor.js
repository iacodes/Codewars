/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

function mygcd(x,y){
  let greatestDenominator = 1

// have to instantiate first, cannot in if statement without reference error
  let greaterNum
  let lesserNum

  if (x<y){
      console.log("if. y is bigger")
    greaterNum = y
    lesserNum = x
  }
  else {
    console.log("else. x is bigger")
      greaterNum = x
    lesserNum = y
  }
  for (i= (greaterNum/2); greaterNum >= 1; i--){
    if (i%1==0 && greaterNum%i==0){
      if (lesserNum%i==0){
        greatestDenominator= i
        return greatestDenominator
      }
    }
  }

  return greatestDenominator
}
