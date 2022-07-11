//document object
//create div elemet and store in a variable
var divE1=document.createElement("div");

//add div to body
document.body.appendChild(divE1);

var textE1= document.createTextNode("some text");

//add text node to div eleemt
divE1.appendChild(textE1);

//add atributes
divE1.setAttribute("id","test")

//read or get elemetns by id or class
var getById=document.getElementById("test");

//remove elemets
//document.getElementById("test")
//getebyid,remove()
//console.log(getById.innerText)

//console.log(getById.innerText);
console.log(getById.innerHTML);

//getById.innerHTML="new data";

var name="Ravi Shankar shahi";
getById.innerHTML="<p>Welcome to "+name+"</>";



