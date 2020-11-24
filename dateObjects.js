console.log("Date Objects!");

let today=new Date();
// console.log(today);

let otherDate=new Date('1-2-2003 4:8:55');
// otherDate = new Date('Oct 12 2003');
// otherDate = new Date('1/12/2000');
console.log(otherDate);
let a=otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getHours();
a = otherDate.getSeconds();
a = otherDate.getTime();
console.log(a);


otherDate.setDate(23);
otherDate.setMonth(5);

console.log(otherDate);
