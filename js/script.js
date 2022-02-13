const list = document.querySelector("#list");
const input = document.querySelector("#input");
const li = document.querySelector("li");

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const newLi = document.createElement("li");
        newLi.innerText = input.value;
        list.appendChild(newLi);
        storage();
        input.value = "";
    }
});

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("done")) {
        e.target.classList.remove("done");    
    } else {
        e.target.classList.add("done");      
    }
    storage();
});

list.addEventListener("dblclick", (e) => e.target.remove());

function storage() {
    window.localStorage.todolist = list.innerHTML;
}



// ----- BACKUP
// const list = document.querySelector("#list");
// const input = document.querySelector("#input");
// const li = document.querySelector("li");

// input.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//         const newLi = document.createElement("li");
//         newLi.innerText = input.value;
//         list.appendChild(newLi);
//         input.value = "";
//     }
// });

// list.addEventListener("click", (e) => {
//     if (e.target.classList.contains("done")) {
//         e.target.classList.remove("done");    
//     } else {
//         e.target.classList.add("done");      
//     }
// });

// list.addEventListener("dblclick", (e) => {
//     e.target.remove();
// });