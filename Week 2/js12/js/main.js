// function sum(num1, num2) {
//   if (num2 === undefined) {
//     return num1 + num1;
//   }
//   return num1 + num2;
// }

// console.log(sum(5, 10));

// const getUserNameFromEmail = (email) => {
//   return email.slice(0, email.indexOf("@"));
// }

// console.log(getUserNameFromEmail("john@davesdomain.com"));

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase("october"));