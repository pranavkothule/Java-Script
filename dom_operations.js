//dom_operations

//Creating with dom
///////////////////////////////////////
let element=document.createElement("li");
element.className='childul';
element.id='lid';
element.setAttribute('title',"pranav");
// element.innerText ='<b>This is created by Pranav</b>';
// element.innerHTML = '<b>This is created by Pranav</b>';
// else
let textnode = document.createTextNode("I'm a text node.");
element.appendChild(textnode);

let ul=document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);
// console.log(element);


//Replace with dom
///////////////////////////////////////
let lm2= document.createElement('h2');
lm2.id='pk1';
lm2.className='class2';
lm2.setAttribute('title','pk2');
let textnode2=document.createTextNode('this is a created node for lm2.');
lm2.appendChild(textnode2);
// console.log(lm2);
element.replaceWith(lm2);
///////////////////////////////////////


let replaceid=document.getElementById('myul');
replaceid.replaceChild(element, document.getElementById('fli'));


//Remove with dom
///////////////////////////////////////
replaceid.removeChild(document.getElementById('lli'));

///////////////////////////////////////
// let check=lm2.getAttribute('id');
// let check = lm2.getAttribute('class');
let check = lm2.hasAttribute('id');
lm2.removeAttribute('id');
lm2.setAttribute('title','mytitle')
// console.log(check);
// console.log(lm2);

////////////////////////////////////////////
let task=document.createElement('h2');
let textheading=document.createTextNode("Go to CodeWithHarry");
task.appendChild(textheading);
console.log(task);

let tag=document.createElement('a');
tag.href='https://www.codewithharry';
console.log(tag);
