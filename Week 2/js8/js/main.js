let soup = "Chicken Noodle Soup";
let isCustomerBanned = true;

let soupAccess = isCustomerBanned 
  ? "Sorry, no soup for you"
  : soup 
  ? `Yes, we have ${soup} today.`
  : "Sorry, no soup today.";

let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
console.log(response);
console.log(soupAccess);



let testScore = 79;
let myGrade = testScore > 89 ? "A"
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: testScore > 59 ? "D"
: "F";
console.log(`My test grade is a ${myGrade}`);


let playerOne = "paper";
let computer = "scissors";
let result = playerOne === computer ? "Tie game!"
: playerOne === "rock" && computer === "paper" ? "Computer wins!"
: playerOne === "paper" && computer === "scissors" ? "Computer wins!"
: playerOne === "scissors" && computer === "rock" ? "Computer wins!"
: "playerOne wins!";
console.log(result);