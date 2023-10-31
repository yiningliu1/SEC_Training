// function pizzaFactory(pizzaSize) {
//   const crust = "original";
//   const size = pizzaSize;
//   return {
//     bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
//   };
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();

class Pizza {
  crust = "original";
  #sauce = "traditional";
  #size;
  constructor (pizzaSize) {
    this.#size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  hereYouGo() {
    console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`)
  }
}
const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust);


// class SpecialtyPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "The Works";
//   }
//   slice() {
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
//   }
// }

// const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.slice();

