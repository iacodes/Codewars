/*
In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
Your task is to return a new sequence of dimensions, sorted ascending by area.
For example,
const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
*/



function sortByArea(array){
    let area

  let newArr=[]
  array.forEach(x=> {
      if(Array.isArray(x) == true){
        area=x[0]*x[1]
      }
      else {
        area=Math.PI*Math.pow(x,2)
      }

      newArr.push([x, area])
      return newArr
    })
    return newArr.sort((a,b) => a[1] - b[1]).map( x => x[0])
}


//Initial solution
/*
function sortByArea(array){
    let area = 1
  //get areas and store as dictionary with area and store in array of item plus area
  let newArr=[]
  array.forEach(x=> {
    console.log(`The array element ${x}`)
      if(Array.isArray(x) == true){
        area=x[0]*x[1]
        console.log(`rectangle area is ${area}`)
      }
      else {
        area=Math.PI*Math.pow(x,2)
        console.log(`circle area is ${area}`)
      }
      newArr.push([x, area])
      console.log(`newarr  is ${newArr}`)
      return newArr
    })
    return newArr.sort((a,b) => a[1] - b[1]).map( x => x[0])
}
*/
