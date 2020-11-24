// editable_div

console.log('editable_div');


//Challenge accepted
console.log("this is is exercise");
/*
You have to create a div and inject into a page which already has a heading and
whenever someone clicks on the div , it should be converted into editable item .whenever user clicks away(blur) . save the 
note into the local storage 
*/



//create div
let dodo = document.createElement('div');
dodo.id = "hihi";
dodo.className = "diver";
dodo.style = "height:50px; width:200px; background-color:gray; margin:100px; position:center;";
// dodo.innerHTML = "Hi i am Here CLick me";
let st = localStorage.getItem('data');
let text;
if (st == null) {
    textnode = document.createTextNode("Hi i am Here CLick me");
} else {
   textnode=document.createTextNode(st);
} 
dodo.appendChild(textnode);


//append
let r = document.getElementById('myfirst');
let x=r.appendChild(dodo);

// div to textarea
let texto = document.createElement('textarea');
texto.id = 'i_text';
texto.style = 'height:50px; width:200px; background-color:white; border:2px solid black; margin:100px; position:center;';
texto.className = 'i_text2';

dodo.addEventListener('click', function (e) {
    dodo.replaceWith(texto);
});
texto.addEventListener('blur', function (e) {
    let tt = texto.value;
    localStorage.setItem('data', tt);
});


///////////////////////////////////////////////////////////////////////



/* let divtag=document.createElement('div');
divtag.className='divclass';
divtag.id='divid';
divtag.innerHTML='Click on me!';
divtag.style = "height:50px; width:200px; background-color:gray; margin:100px; position:center;";

appendto=document.getElementById('myfirst');
appendto.appendChild(divtag);


let tareas=document.createElement('textarea');
tareas.className='tarea1';
tareas.id='tid';
tareas.style = 'height:50px; width:200px; background-color:gray; border:2px solid black; margin:100px; position:center;';


divtag.addEventListener('click', function(e) {
    divtag.replaceWith(tareas);
});

tareas.addEventListener('blur', function (e) {
    let val=tareas.value;
    localStorage.setItem('content',val);
});
 */


