var loginform = document.getElementById("loginform");


// username:"ravi"
// password:"teja"
loginform.addEventListener("submit", function (e) {
    e.preventDefault();
    //var uservalue=document.getElementById("username")

    var username = loginform.elements["username"].value;
    if (username.length< 9){
        console.log("username must be 9 charater")
        return null;
    }



    var password = loginform.elements["password"].value;
    var mail = loginform.elements["mail"].value;

    var loginData = {
        username,
        password,
        mail
    }
    console.log(loginData)


})
