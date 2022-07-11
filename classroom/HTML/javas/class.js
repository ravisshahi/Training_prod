// // function (brand, ram){
// //     this.brand=brand;
// //     this.ram=ram;
// // }

// // this.getbrand=function(){
// //     return this.brand
// // }


// class laptop{

//     constructor(brand ,ram){
//         this.brand=brand
//         this.ram=ram
//     }
//     getbrand(){
//         return this.brand
//     }
//     getram(){
//         return this.ram
//     }
//     setbrand(acer){
//         this.brand=acer
//     }
// }
// let laptop1=new laptop("lenovo", "16gb")
// console.log(laptop1.brand)
// console.log(laptop1.ram)



class product{
    constructor(name, brand){
        this.brand=brand
        this.name=name
    }
    getbrand(){
        return this.brand
    }
    getname(){
        return this.name
    }
}
 class Electronics extends product{
    constructor(name, brand, ram){
        super(name, brand)
        this.ram=ram
    }
    getproductdetail(){
        return'this brand is '&{this.brand} 'name is' &{this.name}
    }
 }
  let ele = new Electronics("lenovo","mobile")
console.log(ele.getproductdetails())