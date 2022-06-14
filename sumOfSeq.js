/*
Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).
*/


const sequenceSum = (begin, end, step) => {
  if (begin>end){
    return 0
  }
  else {
    let total = 0
    for (i=begin; i <= end; i+= step){
      total+= i
    }
    return total
  }
};
