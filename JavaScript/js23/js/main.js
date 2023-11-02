// window.alert(window.location);
// alert(location);

const myArray = ['eat', 'sleep', 'code'];
const myObject = {
  name: "Dave",
  hobbies: ["eat", "sleep", "code"],
  logName: function() {
    console.log(this.name);
  }
};

// myObject.logName();

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const storeLength = localStorage.length;
const mylocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(mylocalData);
console.log(storeLength);
