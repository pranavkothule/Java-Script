//dom1
/* 
console.log("welcome to dom1.js");

let a = document.images;
let b = document.scripts;
function myimages() {
    document.body.innerHTML = a;
}
function myscripts() {
    document.body.innerHTML = b;
}
 */




let x = document.images;

Array.from(x).forEach(function (element) {
    document.getElementById("img").innerHTML = element;
});

let y = document.scripts;

Array.from(y).forEach(function (element) {
    document.getElementById("scr").innerHTML = element;
});