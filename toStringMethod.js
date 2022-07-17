/*
Strings, strings, strings (Easy)

Background
Assume you cannot convert any data type to strings with your computer. Fix it with the following task

Task
The toString() method has been disabled for booleans, numbers, arrays and objects. Your goal is to retrive toString() for the following data types.

I. Booleans
For booleans:

true should be converted to "true"
false should be converted to "false"
II. Numbers
For numbers, conversion should be as follows:

// e.g.
(3).toString() === "3"
(3.14).toString() === "3.14"
(-78).toString() === "-78"
Math.PI.toString() === "3.141592653589793"
III. Arrays
For the purposes of this Kata, you will only be expected to convert arrays with numbers only into strings. However, on top of fixing it, we would also like to improve it as well. We would like to keep the square brackets ([]) around the "stringified" array as it would be seen in Javascript code. For example:

// e.g.
[].toString() === "[]"
[1].toString() === "[1]"
[2,4,8,17].toString() === "[2, 4, 8, 17]"
[Math.PI, Math.E].toString() === "[3.141592653589793,2.718281828459045]"
As you may have noticed in the examples above, when the array has more than one element, some of the strings have spaces as well as commas separating each item but some strings do not. For the purposes of this Kata whether there are whitespaces or not does not matter for stringified arrays - before conducting the tests your input is stripped of all whitespace.

Final Note - IMPORTANT
Your recovered toString() methods should only return the stringified version of the input - it should NOT alter the original value. Test cases have been created to confirm this.
*/


String.prototype.toString = function(){
  return String(this)
}


/*
Alternative solutions
Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString =
function() { return JSON.stringify(this); }

String.prototype.toString = function(){
  return `${this}`
}

Number.prototype.toString = Boolean.prototype.toString = function toString(){
   return ''+this;
}

Array.prototype.toString = function toString(){
  return '['+this.join(',')+']';
}
*/
