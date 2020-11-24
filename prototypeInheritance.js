// prototypeInheritance
/* 

const proto={
    slogan: function () {
        return 'this company is best';
    },
    changeName: function (newName) {
        this.name=newName;
        
    }
}

const harry=Object.create(proto);
harry.name="Harry";
harry.role="coder";
harry.changeName("Harry1");
console.log(harry);


const harry1=Object.create(proto,{
    name:{value: "Harry", writable:true},
    role:{value: "developer"}
});
harry1.changeName("Harry2");
console.log(harry1);

 */
/************************************************************ */
//constructor
//new function
/* function employee(name, salary, exp) {
    this.name=name;
    this.salary=salary;
    this.exp=exp;
}

employee.prototype.slogan = function () {
    return `this company is best,${this.name}`;
}

let harryobj=new employee("Harry",20000,20);
console.log(harryobj);
console.log(harryobj.slogan());

//new function
function programmer(name, salary, exp,language) {
    employee.call(this,name, salary,exp);
    this.language=language;
}
 
//inherit prototype
programmer.prototype=Object.create(employee.prototype);


//manually set constructor of programmer
 programmer.prototype.constructor=programmer;


let rohan= new programmer("Rohan", 2,0, "Javascript"); 
console.log(rohan);
console.log(rohan.slogan());

 */
/******************************************************************************** */

//food/cake
function food(ata) {
    this.ata=ata;;
}

food.prototype.makeata=function () {
    return `baking floor,${this.ata}`;
}
let f1=new food("wheat");
console.log(f1);
console.log(f1.makeata());


function cake(ata,cream) {
    food.call(this,ata);
    this.cream=cream;
} 
//inherit prototype
cake.prototype=Object.create(food.prototype);

//set costructor manually
cake.prototype.constructor=cake;

let c1=new cake("chocklate");
console.log(c1);
console.log(c1.makeata());
