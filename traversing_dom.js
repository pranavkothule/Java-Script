//traversing_dom

let cont=document.querySelector(".new");
cont=document.querySelector(".container");
let nodename=cont.childNodes[1].nodeName;
let nodetype = cont.childNodes[1].nodeType;

// console.log(cont.childNodes);
// console.log(cont.children);
// console.log(nodename);
// console.log(nodetype); //node types

let container= document.querySelector(".container");
// console.log(container.children[1].children[0]);
// console.log(container.firstChild);
// console.log(container.lastChild);
// console.log(container.firstElementChild);
// console.log(container.lastElementChild);
// console.log(container.childElementCount);

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.parentElement);
console.log(container.lastElementChild.parentNode);
console.log(container.lastElementChild.parentElement);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);



