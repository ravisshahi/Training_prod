// let loginform = document.getElementById("loginform")

// var api_url = "./https://jsonplaceholder.typicode.com/users"

// loginform.addEventListener("submit", async function (e) {
//     e.preventDefault();

//     var name = loginform.elements["name"].value;
//     var email = loginform.elements["email"].value;
//     var phone = loginform.elements["phone"].value;
//     var website = loginform.elements["website"].value;


//     let loginformData = (
//         name,
//         email,
//         phone,
//         website
//     )
//     const response = await fetch(api_url, {
//         method: "POST",
//         headers: {
//             'Content-Type': "applictaion/JSON"
//         },
//         body: JSON.stringify(loginformData)
//     })
//     console.log(await response.JSON())
// })
let products;
fetch("products.json").then(response =>{products=response.json()})
console.log(products ) 