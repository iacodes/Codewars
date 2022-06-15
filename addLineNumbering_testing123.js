/*
..Implement the line numbering to text editor.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string.

*/


var number=function(array){

  //for array with lenght greater than 0, 1: is first item, 2: second item etc


  //return new array that has numbering

  return array.map( (x,i) => `${i+1}: ${x}`)
}
