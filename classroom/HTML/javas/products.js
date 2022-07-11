
var Products=[{
    name: "1",
    brand:"hoal",
   price:"1000",
    category:"hildren",
   rating:"5",
   latest:"true"

},
{
    name: "2",
    brand:"hoal",
   price:"4000",
    category:"hildren",
   rating:".5",
   latest:"true"

},
{
    name: "3",
    brand:"hoal",
   price:"500",
    category:"hildren",
   rating:"5",
   latest:"true"

},
{
    name: "4",
    brand:"hoal",
   price:"5000",
    category:"hildren",
   rating:"1",
   latest:"true"

},
{
    name: "5",
    brand:"hoal",
   price:"9000",
    category:"hildren",
   rating:"2",
   latest:"true"

},
{
    name: "6",
    brand:"hoal",
   price:"8700",
    category:"hildren",
   rating:"5",
   latest:"true"

},
{
    name: "7",
    brand:"hoal",
   price:"2500",
    category:"hildren",
   rating:"3",
   latest:"true"

},
{
    name: "8",
    brand:"hoal",
   price:"500",
    category:"hildren",
   rating:"5",
   latest:"true"

},
{
    name: "9",
    brand:"samsung",
   price:"50",
    category:"hildren",
   rating:"5",
   latest:"true"

},
{
name: "10",
brand:"samsung",
price:"5000",
category:"hildren",
rating:"4",
latest:"true"

}
]

const ecomProducts=Products.filter(Products =>Products.brand==="samsung" )
const Products90=Products.filter(Products => Products.price>2000 && Products.price<10000)

const Products100=Products.filter(Products =>Products.price >50 && Products.price<2000)

// let ProductName= Products.map(Products=>Products.name)
// let ProductsDesc=Products.map(Products => &&(Products.name) &&(Products.brand) &&(Products.price))

// const sortedProducts =Products.sort((p1,p2)=>(p1.start>p2.start?1:-1))
// const Productssort =Products.sort((p1,p2)=>(p1.rating>p2.rating?1:-1))
// console.log(Productssort)

const totalSpent= Products.reduce((total,Products)=> total +(Products.price),0)

const mergeFunc=rating
      .map(rating=>rating+5)
      .filter(rating=>rating>=3)
      .sort((a,b)=>b-a)

      Products
           apply 10% offer
           filter by price range 200 - 4000
           sort desc     