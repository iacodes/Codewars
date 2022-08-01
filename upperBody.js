/*
Alex is transitioning from website design to coding and wants to sharpen his skills with CodeWars.
He can do ten kata in an hour, but when he makes a mistake, he must do pushups. These pushups really tire poor Alex out, so every time he does them they take twice as long. His first set of redemption pushups takes 5 minutes. Create a function, alexMistakes, that takes two arguments: the number of kata he needs to complete, and the time in minutes he has to complete them. Your function should return how many mistakes Alex can afford to make.
*/


function alexMistakes(numberOfKata, timeLimit){

  let timeLeft = (timeLimit - (numberOfKata/10)*60)
  let duration = 5
  let countLoop = 1
  let countMistakes =0

//   while (timeLeft>=0){

//     timeLeft = timeLeft - countLoop*duration
//     duration = 2*duration
//     countLoop++

//     if (timeLeft > 0){
//       countMistakes++
//     }
  //}

  let reached = false
  let sumOfTime = 0

  while (reached!=true ){
    if (sumOfTime > timeLeft){
      reached = true
      break
    }
    sumOfTime = sumOfTime + duration
    duration = 2*duration
    countMistakes++

  }

  return countMistakes-1
}

/*
function alexMistakes(numberOfKata, timeLimit, time = 5, times = 0) {
  let minPerKata = (60 / 10) * numberOfKata;

  if (timeLimit - minPerKata < time) {
    return times;
  }

  if (timeLimit - minPerKata >= time) {
    return alexMistakes(numberOfKata, timeLimit - time, time + time, times + 1);
  }


  function alexMistakes(n, t){
  let count = 0
  let start = 5
  let time = (t - n * 6)
  while (time - start >= 0) {
    count++
    time -= start
    start *= 2
  }
  return count
}
*/
