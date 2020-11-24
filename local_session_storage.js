//local and session storage


console.log("local starts");
let array1 = ["I", "am", "hare!"];
localStorage.setItem("Name", "Pranav");
localStorage.setItem("Name1", "Kiran");
localStorage.setItem("Name2", JSON.stringify(array1));

localStorage.removeItem("Name1");
let name0 = localStorage.getItem("Name");
let name1 = localStorage.getItem("Name1");
let name2 = JSON.parse(localStorage.getItem("Name2"));
console.log(name0);
console.log(name1);
console.log(name2);
// localStorage.clear();

//SESSION_STORAGE
console.log("Session starts");
let arr1 = ["I", "am", "hare!"];
sessionStorage.setItem("Nam", "Pranav");
sessionStorage.setItem("Nam1", "Kiran");
sessionStorage.setItem("Nam2", JSON.stringify(arr1));

sessionStorage.removeItem("Nam1");
let nam0 = sessionStorage.getItem("Nam");
let nam1 = sessionStorage.getItem("Nam1");
let nam2 = JSON.parse(sessionStorage.getItem("Nam2"));
console.log(nam0);
console.log(nam1);
console.log(nam2);
// sessionStorage.clear();



