alert("welcome to java script");
//for single line commments
/*for more than single line comments
alert("welcome to java script");alert("welcome to java script");alert("welcome to java script");alert("welcome to java script");
alert("welcome to java script");alert("welcome to java script");
alert("welcome to java script");*/


//primitive data type  or common data type
/*
string "java script"
Number  2100.225   
Boolean   true/false
undefined
null                          */


//name->identifiers(all variable names)

//var  is   keyword to declare any variable

//var name="Java script";
//var price= 1000;

//alert(nsmr);
//console.log(name);


//variable naming conventions
/*var 8name=""   //wrong format
var _name=""    
var  name8=""
var firstNmae=""
var &name=""
var @name=""//wrong    */




//   var brand, price, category      undefined category they are written heir bbut have no meaning

/*   var brand="xiomi";
var sub_brand="poco";
var price="27999";
var software="Android";
var camera ="64 mp and 48mp";
var battery="4500mAH";
var processor="qualcomm snapdrogon 870 processor";      */


/*var firstName ="Ravi";
var middleName="Shankar";
var lastName="Shahi";
var FullName= firstName +"" +middleName +""+ lastName;     */

 
var NAME="ravi";
var firstName="shankar";
var secondName="shahi";

var FullName= `welocme ${NAME} ${firstName} ${secondName}`;       
// COmplex data types example

// Array
var students=["Ravi", {name: "Shankar"}, 100,null, FullName,[1,2,4,[34,67], "shahi"]];
console.log(students[1].name);


//Objects
var dog={
    color:"Golden Green",
    price:"20000",
    Nature:["play","willful","rude"],
    height:"5 feets",
    address:{
        city:"banglore",
        met:function(){}
    },

    runs: function(){
        console.log("Dogs runs on four feets")
    },
    eats: function(){
        console.log("DOgs Eats shit")
    }
}

//obejcts name.propertyname
console.log("dog color")





/*Functions
function fn (){
    var lang="English";
    console.log(lang);
}
fn()     */

function cook(param1,param2,param3){
    var result =`By using ${param1} and ${param2} and ${param3} i made recipe ,take it `;
    return result ;
}
console.log()
function sum(a,b){
    return a+b;
}
  console.log(sum)