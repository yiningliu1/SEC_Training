// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("Yes! resolved the promise!");
//   } else {
//     reject("No! rejected the promise.");
//   }
// })

// // console.log(myPromise);

// // myPromise.then(value => {
// //   return value + 1;
// // })
// // .then(newValue => {
// //   console.log(newValue)
// // })
// // .catch(err => {
// //   console.error(err);
// // })

// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(function() {
//     resolve("myNextPromise resolved");
//   }, 3000)
// });

// myNextPromise.then(value => {
//   console.log(value)
// });

// myPromise.then(value => {
//   console.log(value)
// });

// const users = fetch("https://jsonplaceholder.typicode.com/users").then(response => {
//   return response.json();
// }).then(data => {
//   data.forEach(user => {
//     console.log(user);
//   })
// })

// const myUsers = {
//   userList: []
// }

// const myCoolFunction = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();
//   return jsonUserData;
// }

// myCoolFunction();

// const anotherFunc = async () => {
//   const data = await myCoolFunction();
//   myUsers.userList = data;
//   console.log(myUsers.userList);
// }

// anotherFunc();
// console.log(myUsers.userList);


// const getAllUserEmails = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();
  
//   const userEmailArray = jsonUserData.map(user => {
//     return user.email;
//   });

//   postToWebPage(userEmailArray);
// }

// const postToWebPage = (data) => {
//   console.log(data);
// }

// getAllUserEmails();

// const getDataJoke = async () => {
//   const response = await fetch("https://icanhazdadjoke.com/", {
//     method: "GET",
//     headers: {
//       Accept: "application/json"
//     }
//   });
//   const jsonJokeData = await response.json();

//   console.log(jsonJokeData);
// }


// const jokeObject = {
//   id: 'O7haxA5Tfxc',
//   joke: 'Where do cats write notes?\r\nScratch Paper!'
// }

// const postData = async (jokeObj) => {
//   const response = await fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(jokeObj)
//   });
//   const jsonResponse = await response.json();
//   console.log(jsonResponse);
// }

// postData(jokeObject);

const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    category: "science"
  }
  return requestObj;
}

const buildRequestUrl = (requestData) => {
  return `https://api.chucknorris.io/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&category=${requestData.category}`;
}

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value;
  postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
  console.log(joke);
}

const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished!");
}

processJokeRequest();
