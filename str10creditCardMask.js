// return masked string
function maskify(cc) {
  let arrReplace = []
  for (i = 0; i < cc.split("").length - 4; i++){
    arrReplace.push("#")
  }
  let arr = cc.split("")
  arr.splice(0, cc.split("").length > 4 ? cc.split("").length - 4: 0 ,  ...arrReplace)
  return arr.join("")
}


/*Other solutions

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
*/
