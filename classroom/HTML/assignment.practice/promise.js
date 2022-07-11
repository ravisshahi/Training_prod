var url = "https://jsonplaceholder.typicode.com/todos";
fetch(url)
    .then(res => res.json())
    .then((data) => {
        displayUserGrid(data)
    })
    .catch((err) => console.log(err))
function displayUserGrid(posts) {

    //dom operator

    let postEl = document.getElementById("posts");
    let output = "";
    for (post of posts) {
        output += `<div>
        <div> ${post.completed}</div>
        <div> ${post.completed}</div>
        <div> ${post.title}</div>
        <div> ${post.userid}</div>
        </div>`
    }
    postEl.innerHTML = output;
}