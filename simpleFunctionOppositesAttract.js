/*
Timmy & Sarah ...
Write a function that will take the number of petals of each flower and return true if one picks flower that has odd petals while the other picks a flower with even petals or returns false if they are both odd or even (not opposite).
*/

function lovefunc(flower1, flower2){
  if ((flower1 %2 ==0 && flower2 %2 != 0) || (flower1 %2 !=0 && flower2 %2 == 0)){
    return true
  }
  return false
}
