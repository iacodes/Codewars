/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.*/

function abbrevName(name){

    let firstLetter = name.split("")[0]
    let lastLetter = name.split(" ")[1].split("")[0]
    return `${firstLetter.toUpperCase()}.${lastLetter.toUpperCase()}`
}


/*
Other solutions
function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}


function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
*/
