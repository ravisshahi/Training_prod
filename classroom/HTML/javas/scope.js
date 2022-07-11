// var a=10; // global varialbe

// function sum(){
//     var b=20;// local variable
//              //b=20 without var keyword output will be

a +b and it works as global variable
//     return a+b
// }


//lexical scope

// var name="Ravi"
// function parent(){
//     var x=20;
//     function child(){
//         return x+20;
//     }
//     return child()
// }



var name="Ravi"
function parent(){
    var x=20;
    function child(){
        return x+20;
    }
    return child
}
var calc=parent()
calc()