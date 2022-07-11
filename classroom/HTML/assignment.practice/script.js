async function gestures(){
    let url="users.json";
    try {
        let res= await fetch(url);
        return await res.json();
    }catch (error){
        console.log(error);
        
    }
}
async function renderUsers(){
    let users = await getUsers();
    let html='';
    users.forEach(element => {
        let htmlsegment=`<div class="user">
                          <img src="">
                            <h2>$(user.FirstName) $(user.lastName)</h2>
                            <div class="email"><a href="emial:$(user.email)">$(user.email)</a></div>
                            </div>`;
                            html+=htmlsegment;
        
    });
    let cointainer= document.querySelector(`.cointainer`);
    cointainer.innerHTML=html;
}
renderUsers()