//SYntax errors
// window.print(;
/* --------------------------------------------------- */

//runtime errors-----------calling method on runtime that does not exist 
// window.printme();
/* --------------------------------------------------- */

//try catch
/*   try {
         // Code to run
         [break;]
      } 
      
      catch ( e ) {
         // Code to run if an exception occurs
         [break;]
      }
      
      [ finally {
         // Code that is always executed regardless of 
         // an exception occurring
      }] */
/* --------------------------------------------------- */

//only function
/* function myFunc() {
    var a = 100;
    alert("Value of variable a is : " + a );
} */
/* --------------------------------------------------- */

//try catch
/* function myFunc2() {
    var b = 100;
    try {
        alert("Value of variable a is : " + a );
    } 
    catch ( e ) {
        alert("Error: " + e.description );
    }
} */
/* --------------------------------------------------- */

//throw statement
/* function myFunc3() {
    var a = 100;
    var b=0;
    
    try {
        if ( b == 0 ) {
            throw( "Divide by zero error." ); 
        } else {
            var c = a / b;
        }
    }
    catch ( e ) {
        alert("Error: " + e );
    }
} */

/* --------------------------------------------------- */

//The onerror() Method

/* window.onerror = function () {
    alert("An error occurred.");
} */

/* window.onerror = function (msg, url, line) {
    alert("Message : " + msg );
    alert("url : " + url );
    alert("Line number : " + line );
} */