// Like, Dislike, Nothing come from Preloaded


function likeOrDislike(buttons) {
  let search = true;
  let element = 1
  let countOfElementsInRow = 1

  if (buttons[buttons.length-element] == buttons[buttons.length-element-1]){
    while (search){
      element++
      countOfElementsInRow++
      if (buttons[buttons.length-element] != buttons[buttons.length-element-1]){
        search = false
      }
    }
  }
  return  buttons.length ==0 ? "Nothing" : buttons[buttons.length-1] != buttons[buttons.length-element-2] : buttons[buttons.length-1] ? countOfElementsInRow % 2==0  ? "Nothing" : buttons[buttons.length-1]  ;
}
