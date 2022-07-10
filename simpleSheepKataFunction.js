/*
Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

*/

function warnTheSheep(queue) {
  let sheepNumber = 0
  for (i =queue.length-1; i >= 0 ; i--){
    if (queue[i] == "wolf"){
      return "Pls go away and stop eating my sheep"
    }
    if (queue[i] == "sheep" && queue[i-1] == "wolf"){
      sheepNumber++
      return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`
    }
    sheepNumber++
  }
}
