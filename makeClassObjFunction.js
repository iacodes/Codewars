/*
Instead of creating objects like

function Animal(name,species,age,health,weight,color) {
  this.name = name;
  this.species = species;
  this.age = age;
  this.health = health;
  this.weight = weight;
  this.color = color;
}

Create a function makeClass to allow creating objects like this

const Animal = makeClass("name","species","age","health","weight","color")
*/

/*

function makeClass(name,species,age,health,weight,color) {
    class Animal{
        constructor(name,species,age,health,weight,color){
              this.name = name;
              this.species = species;
              this.age = age;
              this.health = health;
              this.weight = weight;
              this.color = color;
        }
    }
    return new Animal(name,species,age,health,weight,color)
}
*/
class Animal{
  constructor (name,species,age,health,weight,color){
    this.name = name;
    this.species = species;
    this.age = age;
    this.health = health;
    this.weight = weight;
    this.color = color;
  }
}

function makeClass(...properties) {
  return function ( ...arguments ) {
    properties.forEach( (properties, item) => this[properties] = arguments[item] )
  };
}


/*Alternative solutions
function makeClass(...params) {
  return class {
    constructor(...args) {
      params.forEach((item, i) => this[params[i]] = args[i])
    }
  }

  const makeClass = (...keys) =>
  function (...values) {
    keys.forEach((val, idx) => this[val] = values[idx]);
  };


  function makeClass(...properties) {
  return function() {
    for (let i = 0; i < arguments.length; i++)
      this[properties[i]] = arguments[i];  //arguments is a reserved words
  }
}
*/
