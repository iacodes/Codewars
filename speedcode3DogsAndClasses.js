class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}
class Labrador extends Dog{
  constructor(name, age, gender, master, legs) {
    super(name,age, gender, legs)
    this.species = "Labrador";
    this.size = "Large";
    this.loyal = true;
    this.master = master; //for some reason this cannot be part of super. 
  }
}
