// events1
/* 
let btn=document.getElementById('btn');
btn.addEventListener('click',func1);

function func1(e) {
    console.log("Thanks",e);
}

 */

/* 
let l1=document.querySelector('.container');
l1.addEventListener('mouseenter',function(){
   console.log("mouse Enter");
})


let l2 = document.querySelector('.container');
l2.addEventListener('mouseleave', function () {
   console.log("mouse Exit");
})
*/

let l3 = document.querySelector('.container');
l3.addEventListener('mousemove', function (e) {
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetY},${e.offsetY},${e.offsetX})`;
    console.log("mouse move");
})
