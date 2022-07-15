/*
Task
Task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.

You may find the following Math methods useful:

Math.round(x) (of course)
Math.pow(x,y) (returns x to the power of y - e.g. Math.pow(3,4) == 81)
*/

Math.roundTo = function (number, precision) {
  // TODO: Program Me
  return this.round(this.number*this.pow(10, this.precision))/this.pow(10, this.precision)

}
