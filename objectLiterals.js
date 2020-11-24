// objectLiterals
/* 
let car={
    name: 'maruti 800',
    speed: 100,
    run: function () {
        console.log("Is running");
    }
} */
// console.log(car);
// car.run();

function generalCar(name,speed) {
    this.name=name;
    this.speed=speed;
    this.run=function () {
        console.log(this.name+' is running');
    }
}

car1 = new generalCar('M80',80);
car2 = new generalCar('Aspire',140);
console.log(car1);
console.log(car2.run());
