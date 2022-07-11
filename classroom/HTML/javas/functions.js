//declare  function
function fn(){
    console.log("this is a function calling program")
}
//call the function
//fn()
//return from function

function sum(a,b){
    var total= a+b;      // if you put some extra then it will pass it only
    return total;        //sum(10,20,30,40,50)   output will be 30 sum of initially 10+20
                         //sum (10) it will show NaN
}

//above 

/*
function getCartTotal(){
   // console.log(arguments)
   var total=0;
   for(price of arguments){
    total += price
   }
   return total;
}
*/


//hosting
// welcome()
// function welcome(){
//     console.log("welcome function")
// }

// //declare function in literal way
// var greet= function(){
//     console.log("great function")
// }
// greet()


(function(name){
    console.log(name, "self invoking function")
})("teja")

function welcome(){
    return"welcome";
    
}