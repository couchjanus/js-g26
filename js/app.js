/**
 * documentations
 */


// comment

//
"use strict"
// var a = 1;
// let b = 2; //Numbere
// const $test = "test";
// let abc123_qwe$ = 'Hello world';
// var ADD = `+`; // String
// // + - * / %
// {
//     a = 777;
//     let c = a + b;
//     console.log("a + b = ", c);
// }

// // $test = "TEST";
// ADD = "AAAAA";
// b = 1234;
// let c = a + b;
// console.log("a + b = ", c);
// console.log(abc123_qwe$-ADD);
// alert(abc123_qwe$-ADD+$test);


let x = prompt("Enter x =", 0);
let y = prompt("Enter y =", 0);

let c;

if (isNaN(x) || isNaN(y) ) {
    c = "x not a Number or y not a number";
}else{
    x =  parseInt(x);
    y =  parseInt(y);
    let o = prompt("Enter operation: ", '+');
    
    if(o == '+'){
        c = x + parseInt(y);
   }
   else if(o == '-'){
        c = parseInt(x) - parseInt(y);
   }
   else if(o == '*'){
       c = parseInt(x) * parseInt(y);
   }
   else if(o == '/'){
       c = parseInt(x) / parseInt(y);
   }
   else{
       alert("Invaled Operation");
   }
}


alert(c);

