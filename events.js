//event handling


/* document.getElementById('heading').addEventListener
('click',function(){
    console.log('you clicked the heading');
    // location.href='https://pranavkotz.tk';
})
 */
//***************************************************** */
/* document.getElementById('heading').addEventListener
    ('click', function (e) {
        let variable1;
        console.log('you clicked the heading');
        // console.log(e);
        variable1 = e.target;
        // variable1 = e.target(this.className);
        variable1 = e.target.className;
        variable1 = e.target.classList;
        variable1 = Array.from(e.target.classList);
        // variable1= e.target.id;

            console.log(variable1);
    })
 */
//***************************************************** */
document.getElementById('heading').addEventListener
    ('mouseover', function (e) {
        console.log('you clicked the heading');
        let variable1;
        variable1 = e.clientY;
        variable1 = e.offsetY;
        console.log(variable1);
    })

