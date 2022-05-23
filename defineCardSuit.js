// You get any card as an argument. Your task is to return the suit of this card (in lowercase).


function defineSuit(card) {
  switch (card.split("")[card.length-1]){
    case "♣":
      return "clubs";
    case "♦":
      return "diamonds";
    case "♥":
      return "hearts";
    case "♠":
      return "spades";
  }
}
