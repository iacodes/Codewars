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
