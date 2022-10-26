/*
Your task is to create a change machine.

The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example it will return "10p 10p".

The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.

This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces & no commas. The values of the string will be descending.
*/

function changeCoins(enteredAmount){
  if (enteredAmount == "20p"){
    return "10p 10p"
  }
  else if (enteredAmount == "50p"){
    return '20p 20p 10p'
  }
  else if (enteredAmount == "£1"){
    return '20p 20p 20p 20p 20p'
  }
  else if (enteredAmount == "£2"){
    return '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p'
  }
  else if (enteredAmount == "£5"){
    return '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p'
  }
  else {
    return enteredAmount
  }
}

/* complicated incomplete solution for non-existent bills
  function changeCoins(enteredAmount){
    let arr = []
    if ((enteredAmount.split("")[0] == "£" && (Number(enteredAmount.split("").slice(1).join(""))) <= 5 )|| ((Number(enteredAmount.split("").slice(0,-1).join("")) >= 20) && enteredAmount.split("")[2] == "p")){
      if (enteredAmount.split("")[0] == "£"){
            let findDiv = enteredAmount.split("").slice(1).join("") //must use join at the end

            let numOf20p = Math.floor(findDiv/.20)

            if ((findDiv*10)%(.20*10)!=0){
              arr.push("10p")
            }

            for (i=1; i<=numOf20p; i++){
              arr.unshift("20p")
            }
        }
        else if (enteredAmount.split("")[2] == "p"){
          if (enteredAmount == "20p"){
            return "10p 10p"
          }
          let findDiv = enteredAmount.split("").slice(0,-1).join("") //must use join at the end
          let numOf20p = Math.floor(findDiv/20)
          if (findDiv%20 != 0){
              arr.push("10p")
          }

          for (i=1; i<=numOf20p; i++){
            arr.unshift("20p")
          }

        }

        return arr.join(" ")
      }
      else {
        return enteredAmount
      }
}
*/
