function oddOrEven(array) {
   return (array[0] == 0 && array.length==1) || array.length ==0 || Math.abs(array.reduce((acc, item) => {
     acc+item, acc = 0})) %2  == 0  ? "even" : "odd"
}
