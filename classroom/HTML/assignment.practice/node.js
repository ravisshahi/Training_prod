// function welcome(){
//     console.log("this is welocome function")

// }
// console.log("start");
// setTimeout(welcome,10000)

// console.log("end");

var users = ["Lenovo00", "teja", "dwcdcc"]

var promise = new Promise(function (resolve, reject) {
    try {
        resolve(users)
    }
    catch (error) {
        reject(error)

    }
});

promise
    .then((res) => console.log(res))
    .then((err) => console.log(err))

function distancedisplayUserGrid(users) {

}

let usersE1 = documents.getElementsById("users");
let output = "";
for (user of users) {
    output += `<div>
      <div>${user.name}</div>
      <div>${user.email}</div>
      </div>`

}
promise.then(navItems)=>{
    generateMenu(navItems)
}