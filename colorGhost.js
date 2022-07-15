


var Ghost = function() {
  let randomChance = Math.random()
  this.color =  randomChance < .25  ? "white" : randomChance < .5 ? "yellow" : randomChance < .75 ? "purple" : "red"
};


//testing distribution of random function
distribution = {
  white: 0,
  yellow: 0,
  purple: 0,
  red: 0
}


for (i = 0; i < 100000; i++){
  ghost = new Ghost();
  let key = ghost.color
  distribution[key]++
}

distribution




/*Alternative solutions

var Ghost = function() {
  this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
};
*/

/*TDD
// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Solution", function() {
  it("should test for something", function() {
    Test.assertEquals(1 + 1, 2);
    assert.strictEqual(1 + 1, 2);
  });
});

*/
