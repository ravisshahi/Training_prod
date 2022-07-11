// var person={
//     name:"ravi",
//     email:"hnkvasbgt@gmail.com",

//     getName:function(){
//         return this.name
//     },
//     getEmail:function(){
//         return this.email
//     },
//     setName:function(name){
//         this.name=name
//     }
// }
// person.prof="training"
// person.setprofession=function (prof){
//     this.prof=prof
// }



function Laptop(brand, ram){
    this.brand=brand;
    this.ram=ram;

    this.getBrand=function(){
        return this.brand

    }
}
Laptop.prototype.os"dos";
let laptop1= new Laptop ("Lenovo", "16gb");
//laptop1.newProp="";
//laptop1.os="dos"

let laptop2= new Laptop ("Lenovo", "36gb");
// laptop2.os="dos"

