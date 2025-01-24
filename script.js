//python -m http.server

let animalPopulation = 0;

function run() {
  let tigger = new Tiger("Tigger");
  tigger.eat("meat");
  let pooh = new Bear("Pooh");
  pooh.eat("fish");
  pooh.eat("meat");  
  let rarity = new Unicorn("Rarity");
  rarity.eat("marshmallows");
  let gemma = new Giraffe("Gemma");
  gemma.eat("meat");
  gemma.eat("leaves");
  let stinger = new Bee("Stinger");
  stinger.eat("ice cream");
  stinger.eat("pollen");
  
  let Zoebot = new Zookeeper("Zoebot");
  let animals = [tigger, pooh, rarity, gemma, stinger];
  Zoebot.feedAnimals(animals, "McDonald's Chicken McNuggets™");
}

class Zookeeper {
  constructor(name) {
    this.name = name;
  }
  feedAnimals(animals, food) {
    console.log(this.name + " is feeding " + food + " to " + animals.length + " of "  + animalPopulation + " total animals.")
    animals.forEach(animal => {
      animal.eat(food);
    });
    console.log(Animal.getPopulation());
  }
}

class Animal {
  constructor(name,favoriteFood) {
      this.name = name;
      this.favoriteFood = favoriteFood;
      animalPopulation++;
  }
  static getPopulation() {
    return animalPopulation;
  }
  sleep() {
    console.log(this.name + " sleeps for 8 hours");
  }
  eat(food) {
    console.log(this.name + " eats " + food);
    if (food == this.favoriteFood) {
      console.log("YUM!!! " + this.name + " wants more " + food);
    } else {
      this.sleep(this.name);
    }
  }
}

class Tiger extends Animal {
  constructor(name) {
    super(name, "meat");
  }
}

class Bear extends Animal {
  constructor (name) {
    super(name, "fish");
  }
  sleep() {
    console.log(this.name + " hibernates for 4 months");
  }
}

class Unicorn extends Animal {
  constructor (name) {
    super(name, "marshmallows");
    this.sleep();
  }
  sleep() {
    console.log(this.name + " sleeps in a cloud.");
  }
}

class Giraffe extends Animal {
  constructor (name) {
    super(name, "leaves");
  }
  eat(food) {
    if (food == this.favoriteFood) {
      super.eat("leaves");
      this.sleep();
    } else {
      console.log("YUCK!!! " + this.name + " will not eat " + food);
    }
  }
}

class Bee extends Animal {
  constructor (name) { 
    super(name, "pollen")
  }
  eat(food) {
    if (food == this.favoriteFood) {
      super.eat("pollen");
      this.sleep()
    } else {
      console.log("YUCK!!! " + this.name + " will not eat " + food);
    }
  }
  sleep() {
    console.log(this.name + " never sleeps.")
  }
}