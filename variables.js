//variables

// let, const, var

//var
var name="Ron Weasly";
var num=564;
var $name="Ron Weasly";
var _name="Ron Weasly";
console.log(name,_name,$name);
/* ****************************************** */

//const
const nameowners="r weasly";
//nameowners="h Potter";   //can't use 
console.log(nameowners);

const arr1=[12,33,44];
//arr1=[]33,55,66] //can't do
arr1.push(46);  //can do
console.log(arr1);
/* ****************************************** */

//Let
city="kolhapur"; // global scope
{
    let city="Nashik";  // scope for local 
    //city="Pune";
    console.log(city);
}
console.log(city);

