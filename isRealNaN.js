//Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

const isReallyNaN = (val) => {
  // return isNaN(val);  // wasn't working as planned :-(

  if (typeof val == "number"){
    if (val+1 === val+1){
      return false
    }
    else return true
  }
  return false
};


/*
Alternate solutions

const isReallyNaN = Number.isNaN

const isReallyNaN = val => val != val
*/
