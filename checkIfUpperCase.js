//Task
//Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
  let bool =  true
  this.split("").forEach( x => {
      if (x != " " &  x !="." & x!=","  & x!="#"){
        if (x===x.toLowerCase() & bool ===true){
          bool = false
          return bool
        }
      }
    }
  )
  return bool
}

//Cleaner version without all the manual edge case characters
//String.prototype.isUpperCase=function() {return this==this.toUpperCase()}
