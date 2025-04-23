let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener("click", function () {
    let item = document.createElement("li");
    item.classList.add("list-group-item"); 
    
    item.innerText = input.value;
    
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("btn", "btn-outline-success", "btn-sm"); 
    item.appendChild(delbtn);
    ul.appendChild(item);
    
    input.value = '';
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
});
