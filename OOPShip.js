/*
With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.

Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?

You begin with writing a generic Ship class / struct:

function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
}
Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

draft - an estimate of the ship's weight based on how low it is in the water
crew - the count of crew on board
var titanic = new Ship(15, 10);
Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!

Add the method

isWorthIt
to decide if the ship is worthy to loot.


Example:
titanic.isWorthIt() // return false

*/


function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
  this.isWorthIt= function (){
    if (this.draft - this.crew*1.5 > 20){
      return true
    }
    else return false
  }
}

/*Alternative solutions
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
}

Ship.prototype.isWorthIt = function(){
return this.draft-(this.crew*1.5) > 20;
}


class Ship {
  constructor(draft,crew){
   this.draft = draft;
   this.crew = crew;
  }

   isWorthIt(){
     return this.draft - 1.5 * this.crew > 20;
   }
}
*/
