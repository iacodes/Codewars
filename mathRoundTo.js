/*
Task
Task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.

You may find the following Math methods useful:

Math.round(x) (of course)
Math.pow(x,y) (returns x to the power of y - e.g. Math.pow(3,4) == 81)
*/

Math.roundTo = function (number, precision) {
  // TODO: Program Me
  return Math.round(number*Math.pow(10, precision))/Math.pow(10, precision)
}


/*Alternative solution
Math.roundTo = (number, precision) => Number(number.toFixed(precision));

Math.roundTo = function (number, precision) {
  return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
}

*/
