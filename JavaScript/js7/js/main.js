
let customerIsBanned = false;
let soup = "chicken noodle soup";
let reply;
let crackers = "true";

if (customerIsBanned) {
  reply="No soup for you!";
} else if (soup && crackers) {
  reply = `Here's your order of ${soup} and crackers.`;
} else if (soup) {
  reply = `Here's your order of ${soup}`;
} else {
  reply=`Sorry we're out of soup.`;
}
console.log(reply);



let testScore = 59;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B"
} else if (testScore >= 70) {
  grade = "C"
} else if (testScore >= 60) {
  grade = "D"
} else {
  if (collegeStudent) {
    grade = "U"
  } else {
    grade = "F"
  }
}
console.log(grade)

if (playerOne === computer) {
  console.log("It's a tie!")
} else if (playerOne === "rock") {
  if (computer === "paper") {
    console.log("Computer Wins!")
  } else {
    console.log("Player 1 Wins!")
  }
} else if (playerOne === "paper") {
  if (computer === "scisscors") {
    console.log("Computer Wins!")
  } else {
    console.log("Player 1 Wins!")
  }
} else {
  if (computer === "rock") {
    console.log("Computer Wins!")
  } else {
    console.log("Player 1 Wins!")
  }
}