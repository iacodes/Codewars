/*
Boxlines
Given a X*Y*Z box built by arranging 1*1*1 unit boxes, write a function f(X,Y,Z) that returns the number of edges (hence, boxlines) of length 1 (both inside and outside of the box)

Notes
Adjacent unit boxes share the same edges, so a 2*1*1 box will have 20 edges, not 24 edges
X,Y and Z are strictly positive, and can go as large as 2^16 - 1

*/



//f(1,1,1) : 4+4+4 = 12


//f(2,1,1) : 12*(4+4)+4 = 20



//f(2,2,2):54



// Initial direction
// function f(x,y,z){
//   //TODO:Your code here
//   let numOfEdges = 0
//
//   numOfEdges = 12*(x*y*z)-4(x-1)-4(y-1)-4(z-1)
//
//   return numOfEdges
// }

function f(x,y,z){
  let numOfEdges = 0

  numOfEdges = x*(y+1)*(z+1)+y*(x+1)*(z+1)+z*(x+1)*(y+1)

  return numOfEdges
}
