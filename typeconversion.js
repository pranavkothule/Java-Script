//type conversion
console.log("****Type converison****");

/***********************************/
/* let myVar=34;
console.log(myVar);
console.log(typeof(myVar));
 */

/***********************************/
//String conversion
let myVar1=String(34);
console.log(myVar1,(typeof myVar1));


let booleanVar=String(true);
console.log(booleanVar,(typeof booleanVar));


let date1=String(new Date());
console.log(date1,(typeof date1));


let  array2= String([3,4,5,6]);
console.log(array2,(typeof array2));

let oLitrals=String({
    pranav:"maggypop",
    rahul:"nups",
})
console.log(oLitrals,(typeof oLitrals));

/***********************************/
//number converion
let li=Number("1233");
li=Number("345d43");
li=Number(true);
li=Number([1,2,3,4,5]);
console.log(li,(typeof li));

let numF=parseFloat(30.456);
//let numI=parseInt(30.456);
console.log(numF.toFixed(2),(typeof numF));

/***********************************/
//type coercion
let mystr="87";
let mynum=98;
console.log(mystr+mynum);
