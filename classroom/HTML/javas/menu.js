var btn= documnets.getElementById("btn");
var navItmes=["Home", "about", "Services","FAQ","Contact"];

function generatemenu(data){
    var navE1 = Document.getElementById("menu");
    var output="<ul>";
    for(navItem of data){
        //console.log(navItem)
        output += `<li><a href ${navItem}.HTML>${navItem}</a></li>`
    }

var output="<ul>";
console.log(output)
navE1.innerhtml =output;
}
function create menu




    

// output += "</ul">
// console.log(output)
// navE1.innerHTML=output;

// // var products=[
// // {
//     productId: 1,
//     brand: "Redmi",
//     Price: 13450,
// }
// {
//     productId: 1,
//     brand: "Redmi",
//     Price: 13450,
// }
// {
//     productId: 1,
//     brand: "Redmi",
//     Price: 13450,
// }
// {
//     productId: 1,
//     brand: "Redmi",
//     Price: 13450,
// }
// ]