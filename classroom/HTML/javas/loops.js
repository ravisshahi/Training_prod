//loops
var i = 0;
/*
var i=0;
while(i<10){
    //while loop body
    console.log("i value is :",i);
    i++;

}
*/
/*
do{
    console.log("i value is :",i);
    i++;

}
while(i <= 10);
*/
/*
for(var i=0; i<=10; i++){
    console.log("i value is :",i)
}

*/
//console.time("brands")
//console.time("students")
//var brands = ["pace", "lenovo", "HP", "Doll", "oneplus"];
/*for (i = 0; i < brands.length; i++) {
    console.log("Brand name is :", brands[i])
}
*/
var students = ["Sachin", "ravi", "tinku", "yogesh", "roop"];
/*
for (i = 0; i < students.length; i++) {
    console.log("students name is :", students[i])
}
console.timeEnd("brands")
console.timeEnd("students")
*/
/*
for (student of students){
    console.log(student)
}
*/
/*
for(prop in person){
    console.log(prop,person[prop])
}

var person={
    name: "Ravi",
    age:22,
    emailid:"ravishankar12353@gmail.com",

}*/

var persons=[
   { name: "Ravi",
    age:22,
    email:"ravishankar12353@gmail.com"

},
{
    name: "Ravi",
    age:22,
    email:"ravishankar12353@gmail.com"

},
{
    name: "Ravi",
    age:22,
    emailid:"ravishankar12353@gmail.com",

}]
for(person of persons){
    for(key in person){
    console.log(key, person[key])
    
    }
}



