// function welcome(){
//     alert("i am an evenbt  sjvbffaek.jfabkjf b")
// }

// var btn = document.getElementById("btn");
// //btn.onclick =welcome;
// //even delegation
// //btn.addEventListener("eventname",event handlre);

// btn.addEventListener("click",welcome);


function taskone(eve){
    console.log("task one")
    // if(false){
    //     eve.stopImmediatepropagation()
    // }
    eve.preventdefault()
    
}
function tasktwo(eve){
    console.log("task two")
    eve.stopImmediatePropagation()
}

function parentHandler(ev){
    console.log("this is parent")
   // ev.stopPropagation()
    console.log(ev.currentTarget)
}
function childhandler(ev){
    console.log("this is child")
    ev.stopPropagation()
}

var p1=document.getElementById("parent");
var p2=document.getElementById("parent1");
var c1=document.getElementById("child");
var c2=document.getElementById("child2");

p1.addEventListener("click", parentHandler);
c1.addEventListener("click", childhandler);
p2.addEventListener("click", parentHandler);
c2.addEventListener("click", childhandler);
