// import playGuitar from "./guitars.js";
// import {shredding as shred, plucking as fingerpicking } from "./guitars.js";
import * as Guitars from "./guitars.js";
import User from "./user.js";

const me = new User("email@email.com", "Dave");
console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());
console.log(me);
console.log(me.greeting());