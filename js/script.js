const list = document.querySelector("#list");
const input = document.querySelector("#input");
const li = document.querySelector("li");

function storage() {
    window.localStorage.todolist = list.innerHTML;
};

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
    e.target.classList.toggle("done");
    // if (e.target.classList.contains("done")) {
    //     e.target.classList.remove("done");    
    // } else {
    //     e.target.classList.add("done");      
    // }
    storage();
});

list.addEventListener("dblclick", (e) => e.target.remove());


// CORRECTION FLAVIEN
// const input = document.querySelector("#input");
// const list = document.querySelector("ul#list");

// const TODO_NAME = "todolist";

// if (localStorage.getItem(TODO_NAME)) {
//     list.innerHTML = localStorage.getItem(TODO_NAME);
// }

// function save() {
//     window.localStorage.setItem(TODO_NAME, list.innerHTML);
// };

// input.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//         const newLi = document.createElement("li");
//         newLi.innerText = input.value;
//         list.appendChild(newLi);
//         input.value = "";
//         save();
//     }
// });

// list.addEventListener("click", (e) => {
//     e.target.classList.toggle("done");
//     save();
// });

// list.addEventListener("dblclick", (e) => e.target.remove());