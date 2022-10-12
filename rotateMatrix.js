//Rotate a matrix 90 degree to the left. The matrix is an array of integers with dimension n,m

/*Example:
Input: {{-1, 4, 5},
        { 2, 3, 4}}

Output: {{ 5, 4},
         { 4, 3},
         {-1, 2}}

*/

//for a matrix of 1, 2, 3, n rows and 1, 2, m columns,
//the last element of first row, becomes first column
//the last element of second row becomes second column

var rotateMatrix = matrix => {
  let returnMatrix = []

  for (i=0; i < matrix.length; i++){
    for (k=0; k < matrix[i].length; k++){
      returnMatrix.push(matrix[i][k])
    }
  }



  return returnMatrix

}
